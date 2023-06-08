using AltV.Net;
using Microsoft.Extensions.DependencyInjection;
using Model;
using Repository.Repository;

namespace MainResource;

public class Server : Resource
{
    public override void OnStart()
    {
        Alt.Log("服务已启动");
        // 依赖注入
        var collection = new ServiceCollection();
        // 注册想要使用的服务
        collection.AddTransient<MainDbContext>();
        // 创建ServiceProvider实例
        var serviceProvider = collection.BuildServiceProvider();
    }

    public override void OnStop()
    {
        Alt.Log("服务已停止");
    }
}