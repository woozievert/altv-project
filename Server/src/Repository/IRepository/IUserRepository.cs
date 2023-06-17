using AltV.Net.Elements.Entities;

namespace src.Repository.IRepository;

/// <summary>
/// 仓储层接口
/// </summary>
public interface IUserRepository
{
    public bool Register(IPlayer player, string username, string password, string email);

    public bool CheckPassword(string username, string inputPwd);

    public bool IsUserExist(string username);

    public void UserLogin(Factory.TPlayer.TPlayer player, string user);
}