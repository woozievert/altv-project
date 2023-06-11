using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using MainResource.Log;
using Microsoft.Extensions.DependencyInjection;
using src.Repository.IRepository;

namespace src.Event;

public class Connect : IScript
{
    private readonly IUserRepository UserRepository;

    public Connect(IUserRepository userRepository)
    {
        UserRepository = userRepository;
    }

    public Connect()
    {
        // 获取服务容器 让服务进行注入
        UserRepository = Server.serviceProvider.GetService<IUserRepository>();
    }

    [ScriptEvent(ScriptEventType.PlayerConnect)]
    public void OnPlayerConnect(IPlayer player, string reason)
    {
            Logger.Info("[连接] " + player.Name + " 连接了服务器");
            player.Emit("TestClientside", player.Name);
            player.Emit("auth:client:show");
    }

    [ClientEvent("auth:server:tryLogin")]
    public void TryLogin(IPlayer player, string username, string password)
    {
        if (player == null) return;
        // 校验账号密码
        if (UserRepository.Login(player,username,password))
        {
            player.SetSyncedMetaData("playerName", username);
            player.Spawn(new Position(-1291, 83, 54), 500); // 生成 player
            player.Model = 0xB8D69E3;
        
            player.GetSyncedMetaData("playerName", out string playerName);
        
            player.Emit("nametag:client:setup", player.Id, playerName);
    
            player.Emit("auth:client:close");
    
            player.Emit("client:Console", "登录成功 - 已生成");
        }
        
    }
}