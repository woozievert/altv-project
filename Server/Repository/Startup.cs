using Microsoft.Extensions.DependencyInjection;
using Model;

namespace Repository;

public class Startup
{
    public IServiceCollection Services { get; }
    public IServiceProvider ServiceProvider { get; }

    public Startup()
    {
        var services = new ServiceCollection();
        ConfigureServices(services);
        ServiceProvider = services.BuildServiceProvider();
    }

    public void ConfigureServices(IServiceCollection services)
    {
        // 注册服务
    }
}
