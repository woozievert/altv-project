using AltV.Net.Elements.Entities;
using Model.Model.Player;

namespace Repository.IRepository;

/// <summary>
/// 仓储层接口
/// </summary>
public interface IUserRepository
{

    public  bool Register(IPlayer player, string username, string password, string email);
    public bool Login(IPlayer player,string username, string password);
}
