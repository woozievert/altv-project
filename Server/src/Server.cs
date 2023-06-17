using AltV.Net;
using Microsoft.Extensions.DependencyInjection;
using src.Factory.TPlayer;
using src.Model;
using src.Repository.IRepository;
using src.Repository.Repository;
using IPlayer = AltV.Net.Elements.Entities.IPlayer;

namespace src;

public class Server : Resource
{
    // 静态管道实例
    public static ServiceProvider serviceProvider;

    public Server()
    {
        // 创建一个服务容器
        var services = new ServiceCollection();

        // 注册一个服务
        services.AddDbContext<MainDbContext>();
        services.AddScoped<IUserRepository, UserRepository>();
        // 解析一个服务
        serviceProvider = services.BuildServiceProvider();
    }

    public override void OnStart()
    {
        Alt.Log("依赖注入已完成");
        Alt.Log("服务已启动");
    }

    public override void OnStop()
    {
        Alt.Log("服务已停止");
    }

    public override IEntityFactory<IPlayer> GetPlayerFactory()
    {
        return new TPlayerFactory();
    }
}