using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using MainResource.Log;

namespace src.Event;

public class Connect : IScript
{
    // private readonly UserRepository UserRepository;

    // public Connect(UserRepository userRepository)
    // {
    //     UserRepository = userRepository;
    // }

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
        // if (UserRepository.Login(player,username,password))
        // {
        Logger.Info(player + " " + username + " " + password);
        
        player.SetSyncedMetaData("playerName", username);
        
        player.Spawn(new Position(-1291, 83, 54), 500); // 生成 player
        player.Model = 0xB8D69E3;

        player.Emit("auth:client:close");
    
        player.Emit("client:Console", "登录成功 - 已生成");
        // }
    }
}