using Src.Factory.TPlayer;

namespace Src.Repository.IRepository;

/// <summary>
/// 仓储层接口
/// </summary>
public interface IUserRepository
{
    public bool Register(TPlayer player, string username, string password, string email);

    public bool CheckPassword(string username, string inputPwd);

    public bool IsUserExist(string username);

    public void UserLogin(TPlayer player, string user);
}