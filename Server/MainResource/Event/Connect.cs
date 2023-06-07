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
        player.Emit("client:Console", "测试消息");
    }
}