using AltV.Net;
using Newtonsoft.Json.Linq;
using Src.Factory.TPlayer;
using Timer = System.Timers.Timer;

namespace Src.Weather;

public abstract class Server : IScript
{
    public static async void SetWeather()
    {
        Alt.Log("[天气]开始设置服务器天气...");
        if (await GetWeather(true))
        {
            Alt.Log("[天气]服务器天气初始化获取完成");
        }
        await Timer();
    }
    
    public static void SyncPlayerWeather(TPlayer player)
    {
        player.Emit("weather:client:weather", Weather.Condition, 0);
    }
    
    // public static void SetTime(int hour, int minute, int second)
    // {
    //     var players = Alt.GetAllPlayers();
    //     foreach (TPlayer player in players)
    //     {
    //         if (player.IsLogin)
    //         {
    //             player.SetDateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, hour, minute, second);
    //         }
    //     }
    //     Alt.EmitAllClients("weather:client:time", hour, minute, second, 60000);
    // }
    
    public static void SyncPlayerTime(TPlayer player)
    {
        player.Emit("weather:client:time",DateTime.Now.Hour, DateTime.Now.Minute, DateTime.Now.Second, 60000);
    }
    
    private static async Task<bool> GetWeather(bool isFirst)
    {
        const string apiKey = "b1326b24a9c9df417789f872f9e9f294";
        const string apiCity = "上海市";
        const int apiType = 1; // 实时
        using HttpClient weatherClient = new HttpClient();
        string WeatherAPI = $"https://api.qqsuu.cn/api/dm-hqtiqnqi?city={apiCity}&type={apiType}&apiKey={apiKey}";
        try
        {
            HttpResponseMessage response = await weatherClient.GetAsync(WeatherAPI);
            response.EnsureSuccessStatusCode(); // 确保请求成功
            string responseBody = await response.Content.ReadAsStringAsync();
            var WeatherObj = JObject.Parse(responseBody);
            var WeatherData = WeatherObj["data"];
            Weather.Condition = GetNativeWeather(WeatherData["weather"].Value<string>());
            Weather.CurrentTemperature = WeatherData["real"].Value<string>();
            Weather.HighestTemperature = WeatherData["highest"].Value<string>();
            Weather.LowestTemperature = WeatherData["lowest"].Value<string>();
            Weather.Wind = WeatherData["wind"].Value<string>();
            Weather.Tips = WeatherData["tips"].Value<string>();
            if (!isFirst)
            {
                var syncCount = 0;
                foreach (var player1 in Alt.GetAllPlayers())
                {
                    var player = (TPlayer)player1;
                    if (player.IsLogin)
                    {
                        if (GetNativeWeatherId(GetNativeWeather(Weather.Condition)) != 9999)
                        {
                            SyncPlayerWeather(player);
                            player.SetWeather(GetNativeWeatherId(GetNativeWeather(Weather.Condition)));
                            player.SetDateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, DateTime.Now.Hour, DateTime.Now.Minute, DateTime.Now.Second);
                            syncCount++;
                        }
                    }
                }
                Alt.Log($"[天气]服务器天气更新完成并试图同步至 {syncCount} 名玩家");
            }
            Alt.Log("[天气]服务器天气更新完成");
            return true;
        }
        catch (Exception ex)
        {
            Alt.LogError("[天气]获取天气API错误：" + ex.Message);
            return false;
        }
    }

    private static async Task Timer()
    {
        var timer = new Timer(3600000);
        timer.AutoReset = true;
        var tcs = new TaskCompletionSource<bool>();
        timer.Elapsed += (sender, e) =>
        {
            timer.Stop();
            tcs.TrySetResult(true);
        };
        timer.Start();
        
        await tcs.Task;

        Alt.Log("[天气]开始获取并更新服务器天气");
        await GetWeather(false);
    }

    private static string GetNativeWeather(string condition)
    {
        if (condition.Contains('晴'))
        {
            return "EXTRASUNNY";
        }
        if (condition.Contains('阴'))
        {
            return "OVERCAST";
        }
        if (condition.Contains('雨'))
        {
            return "RAIN";
        }
        if (condition.Contains('雾'))
        {
            return "SMOG";
        }
        if (condition.Contains('云'))
        {
            return "CLOUDS";
        }
        if (condition.Contains('雷'))
        {
            return "THUNDER";
        }
        return "null";
    }

    private static uint GetNativeWeatherId(string weatherType)
    {
        if (weatherType == "EXTRASUNNY") return 0;
        if (weatherType == "CLEAR") return 1;
        if (weatherType == "CLOUDS") return 2;
        if (weatherType == "SMOG") return 3;
        if (weatherType == "FOGGY") return 4;
        if (weatherType == "OVERCAST") return 5;
        if (weatherType == "RAIN") return 6;
        if (weatherType == "THUNDER") return 7;
        if (weatherType == "LIGHTRAIN") return 8;
        if (weatherType == "SMOGGYLIGHTRAIN") return 9;
        if (weatherType == "VERYLIGHTSNOW") return 10;
        if (weatherType == "WINDYLIGHTSNOW") return 11;
        if (weatherType == "LIGHTSNOW") return 12;
        if (weatherType == "CHRISTMAS") return 13;
        if (weatherType == "HALLOWEEN") return 14;
        return 9999;
    }
}