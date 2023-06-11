using AltV.Net;
using Microsoft.Extensions.DependencyInjection;
using src.Model;
using src.Repository.IRepository;
using src.Repository.Repository;

namespace src;

public class Server : Resource
{
    public override void OnStart()
    {
        // 创建一个服务容器
        var services = new ServiceCollection();

        // 注册一个服务
        services.AddDbContext<MainDbContext>();
        services.AddScoped<IUserRepository, UserRepository>();

        // 解析一个服务
        var serviceProvider = services.BuildServiceProvider();
        Alt.Log("依赖注入已完成");
        Alt.Log("服务已启动");
    }

    public override void OnStop()
    {
        Alt.Log("服务已停止");
    }
}