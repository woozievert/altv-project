using AltV.Net;
using Src.Factory.TPlayer;

namespace Src.Chat;

public class Handler : IScript
{
    private static Dictionary<string, Action<TPlayer, string[]>> CmdHandlers = new Dictionary<string, Action<TPlayer, string[]>>();
    private static Dictionary<TPlayer, bool> MutedPlayers = new Dictionary<TPlayer, bool>();
    
    private static void InvokeCmd(TPlayer player, string cmd, string[] args)
    {
        cmd = cmd.ToLower();
        if (CmdHandlers.TryGetValue(cmd, out var callback))
        {
            callback.Invoke(player, args);
        }
        else
        {
            SendPlayerMessage(player, $"{{FF0000}} 抱歉, 无效的指令: /{cmd}");
        }
    }

    [ClientEvent("chat:server:addMessage")]
    public void HandleMessage(TPlayer player, string message)
    { 
        Alt.Log("服务端收到:" + message);
        if (message.StartsWith("/"))
        {
            message = message.TrimStart('/');

            if (!string.IsNullOrEmpty(message))
            {
                Alt.Log("[chat:cmd] " + player.Name + ": /" + message);

                var args = message.Split(' ');
                var cmd = args[0];
                args = args[1..];

                InvokeCmd(player, cmd, args);
            }
        }
        else
        {
            if (MutedPlayers.ContainsKey(player) && MutedPlayers[player])
            {
                SendPlayerMessage(player, "{FF0000} 您正在被禁言中.");
                return;
            }

            message = message.Trim();

            if (!string.IsNullOrEmpty(message))
            {
                Alt.Log("[chat:msg] " + player.Name + ": " + message);

                player.Emit("chat:client:addMessage", player.Name, message.Replace("<", "&lt;").Replace("'", "&#39").Replace("\"", "&#34"));
            }
        }
    }

    public static void SendPlayerMessage(TPlayer player, string message)
    {
        player.Emit("chat:client:addMessage", null, message);
    }

    public static void RegisterCmd(string cmd, Action<TPlayer, string[]> callback)
    {
        cmd = cmd.ToLower();

        if (CmdHandlers.ContainsKey(cmd))
        {
            Alt.LogError($"注册的指令 /{cmd} 已存在");
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