using AltV.Net;
using AltV.Net.ColoredConsole;

namespace MainResource.Log;

public static class Logger
{
    // 提示日志
    public static void Info(string msg)
    {
        var coloredMessage = new ColoredMessage();
        coloredMessage += TextColor.Green;
        coloredMessage += msg;
        Alt.LogColored(coloredMessage);
    }
    // 警告日志
    public static void Warn(string msg)
    {
        var coloredMessage = new ColoredMessage();
        coloredMessage += TextColor.Yellow;
        coloredMessage += msg;
        Alt.LogColored(coloredMessage);
    }
    // 错误日志
    public static void Error(string msg)
    {
        var coloredMessage = new ColoredMessage();
        coloredMessage += TextColor.Red;
        coloredMessage += msg;
        Alt.LogColored(coloredMessage);
    }
}