using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Src.Factory.TPlayer;
using Src.Model;
using Src.Model.User;
using Src.Repository.IRepository;
using Src.Repository.Tools;

namespace Src.Repository.Repository;

/// <summary>
/// 仓储层
/// </summary>
public class UserRepository : IUserRepository
{
    private readonly MainDbContext _context;

    public UserRepository(MainDbContext mainDbContext)
    {
        _context = mainDbContext;
    }

    /// <summary>
    /// 密码检查
    /// </summary>
    /// <param name="username"></param>
    /// <param name="inputPwd"></param>
    /// <returns></returns>
    public bool CheckPassword(string username, string inputPwd)
    {
        string pwd = _context.Users.Where(x => x.UserName == username).Select(x => x.Password).FirstOrDefault();
        if (IsUserExist(username))
        {
            if (BCrypt.CheckPassword(inputPwd, pwd))
            {
                return true;
            }
        }

        return false;
    }

    /// <summary>
    /// 判断用户是否存在
    /// </summary>
    /// <param name="username"></param>
    /// <returns></returns>
    public bool IsUserExist(string username)
    {
        var user = _context.Users.FirstOrDefault(u => u.UserName == username);
        if (user != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public void UserLogin(TPlayer player, string user)
    {
        player.PlayerId = _context.Users.Where(x => x.UserName == user).Select(x => x.Uid).FirstOrDefault();
        player.PlayerName = _context.Users.Where(x => x.UserName == user).Select(x => x.UserName).FirstOrDefault();
        player.IsLogin = true;

        player.SetSyncedMetaData("playerName", player.PlayerName);

        player.Spawn(new Position(-1291, 83, 54), 500); // 生成 player
        player.Position = new Position(-1291, 83, 54);
        
        player.Model = 0xB8D69E3;

        player.Emit("client:Console", "登录成功 - 已生成");
        player.Emit("auth:client:close", player.IsLogin);

        player.Emit("chat:client:init"); // 初始化聊天框
        
        Chat.Handler.RegisterCmd("test", TestCommand);
        
        Chat.Handler.RegisterCmd("noclip", ToggleNoClip);
    }
    
    private static void TestCommand(TPlayer player, string[] strings)
    {
        player.Emit("client:Console", strings);
    }

    private static void ToggleNoClip(TPlayer player, string[] strings)
    {
        player.Emit("noclip:client:toggle", true);
    }

    /// <summary>
    /// 注册接口
    /// </summary>
    /// <param name="player">IPlayer对象</param>
    /// <param name="username">用户名</param>
    /// <param name="password">密码</param>
    /// <param name="email">邮箱</param>
    /// <returns></returns>
    public bool Register(TPlayer player, string username, string password, string email)
    {
        var user = _context.Users.FirstOrDefault(u => u.UserName == username);
        if (user != null)
        {
            player.Emit("auth:client:alreadyExist");
            // 用户已存在
            return false;
        }
        else
        {
            var newUser = new User
            {
                Uid = Uid.UidCreate(),
                UserName = username,
                Password = BCrypt.HashPassword(password, BCrypt.GenerateSalt()),
                Email = email,
                RegisterTime = DateTime.Now,
                LoginIp = "0.0.0.0"
            };
            _context.Users.Add(newUser);
            _context.SaveChanges();
            // 注册成功
            return true;
        }
    }
}