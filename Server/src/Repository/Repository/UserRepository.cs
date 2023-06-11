using AltV.Net.Elements.Entities;
using Model.Model.Player;
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
    /// 登录接口
    /// </summary>
    /// <param name="player">IPlayer对象</param>
    /// <param name="username">用户名</param>
    /// <param name="password">密码</param>
    /// <returns></returns>
    public bool Login(IPlayer player, string username, string password)
    {

        var user = _context.Users.FirstOrDefault(u => u.UserName == username);
        if (user != null)
        {

            if (BCrypt.CheckPassword(user.Password, password))
            {
                player.Emit("auth:client:close");
                // 登录成功
                return true;
            }
            else
            {
                player.Emit("auth:client:wrongAuth");
                // 密码错误
                return false;
            }
        }
        else
        {
            player.Emit("auth:client:wrongAuth");
            // 用户不存在
            return false;
        }

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
            player.Emit("auth:client:wrongAuth");
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
