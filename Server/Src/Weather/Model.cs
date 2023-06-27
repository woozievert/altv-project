namespace Src.Weather;

public abstract class Weather
{
    public static string Condition { get; set; } = "CLEAR"; // 天气
    public static string CurrentTemperature { get; set; } // 当前气温
    public static string HighestTemperature { get; set; } // 最高气温
    public static string LowestTemperature { get; set; } // 最低气温
    public static string Wind { get; set; } // 风向
    public static string Tips { get; set; } // 温馨提示
}