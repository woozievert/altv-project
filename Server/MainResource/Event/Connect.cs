using System.Numerics;
using AltV.Net;
using AltV.Net.Elements.Entities;
using MainResource.Log;

namespace MainResource.Event;

public class Connect : IScript
{
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
        
        player.Spawn(new Vector3((float)-1291.71, (float)83.43, (float)54.89)); // 生成 player
        player.Model = 0xB8D69E3;
        
        player.Emit("auth:client:close");
        
        player.Emit("client:Console", "登录成功 - 已生成");
    }
}