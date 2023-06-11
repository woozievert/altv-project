using AltV.Net;
using AltV.Net.Elements.Entities;
using MainResource.Log;

namespace src.Event;

public class Disconnect : IScript
{
    [ScriptEvent(ScriptEventType.PlayerDisconnect)]
    public void OnPlayerDisconnect(IPlayer player, string reason)
    {
        Logger.Info("[断开] " + player.Name + " 离开了服务器");
        player.Emit("nametag:client:disconnect", player.Id);
    }
}