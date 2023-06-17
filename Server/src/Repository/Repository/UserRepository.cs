using AltV.Net.Elements.Entities;
using Model.Model.IPlayer;
using src.Model;
using src.Repository.IRepository;
using src.Repository.Tools;

namespace src.Repository.Repository;

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

    public void UserLogin(Factory.TPlayer.TPlayer player, string user)
    {
        player.PlayerId = _context.Users.Where(x => x.UserName == user).Select(x => x.Uid).FirstOrDefault();
        player.PlayerName = _context.Users.Where(x => x.UserName == user).Select(x => x.UserName).FirstOrDefault();
        player.IsLogin = true;
        player.Emit("auth:client:loginSuccess");
    }

    /// <summary>
    /// 注册接口
    /// </summary>
    /// <param name="player">IPlayer对象</param>
    /// <param name="username">用户名</param>
    /// <param name="password">密码</param>
    /// <param name="email">邮箱</param>
    /// <returns></returns>
    public bool Register(IPlayer player, string username, string password, string email)
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
                RegisterTime = DateTime.Now
            };
            _context.Users.Add(newUser);
            _context.SaveChanges();
            // 注册成功
            return true;
        }
    }
}