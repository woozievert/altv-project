using AltV.Net;
using Src.Factory.TPlayer;

namespace Src.Chat;

public abstract class Handle : IScript
{
    private static Dictionary<string, Action<TPlayer, string[]>> CmdHandlers = new Dictionary<string, Action<TPlayer, string[]>>();
    private static Dictionary<TPlayer, bool> MutedPlayers = new Dictionary<TPlayer, bool>();
    
    private static void InvokeCmd(TPlayer Player, string cmd, string[] args)
    {
        cmd = cmd.ToLower();
        if (CmdHandlers.TryGetValue(cmd, out var callback))
        {
            callback.Invoke(Player, args);
        }
        else
        {
            SendPlayerMessage(Player, $"{{FF0000}} 抱歉, 无效的指令: /{cmd}");
        }
    }

    [ClientEvent("chat:server:addMessage")]
    public void HandleMessage(TPlayer Player, string message)
    { 
        Alt.Log("服务端收到:" + message);
        if (Player == null) return;
        if (message.StartsWith("/"))
        {
            message = message.TrimStart('/');

            if (!string.IsNullOrEmpty(message))
            {
                Alt.Log("[chat:cmd] " + Player.Name + ": /" + message);

                var args = message.Split(' ');
                var cmd = args[0];
                args = args[1..];

                InvokeCmd(Player, cmd, args);
            }
        }
        else
        {
            if (MutedPlayers.ContainsKey(Player) && MutedPlayers[Player])
            {
                SendPlayerMessage(Player, "{FF0000} 您正在被禁言中.");
                return;
            }

            message = message.Trim();

            if (!string.IsNullOrEmpty(message))
            {
                Alt.Log("[chat:msg] " + Player.Name + ": " + message);

                Alt.EmitClients(null, "chat:client:addMessage", Player.Name, message.Replace("<", "&lt;").Replace("'", "&#39").Replace("\"", "&#34"));
            }
        }
    }

    public static void SendPlayerMessage(TPlayer Player, string message)
    {
        Player.Emit("chat:client:addMessage", null, message);
    }

    public static void RegisterCmd(string cmd, Action<TPlayer, string[]> callback)
    {
        cmd = cmd.ToLower();

        if (CmdHandlers.ContainsKey(cmd))
        {
            Alt.LogError($"Failed to register command /{cmd}, already registered");
        }
        else
        {
            CmdHandlers.Add(cmd, callback);
        }
    }

    private static void MutePlayer(TPlayer player, bool state)
    {
        MutedPlayers[player] = state;
    }
}