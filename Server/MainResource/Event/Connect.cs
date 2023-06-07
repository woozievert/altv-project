using AltV.Net;
using AltV.Net.Elements.Entities;

namespace MainResource.Event;

public class Connect : IScript
{
    [ScriptEvent(ScriptEventType.PlayerConnect)]
    public void OnPlayerConnect(IPlayer player, string reason)
    {
        player.Emit("TestClientside", player.Name);
        Alt.Log("有玩家加入");
    }
}