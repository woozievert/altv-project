using AltV.Net;

namespace MainResource;

public class Server : Resource
{
    public override void OnStart()
    {
        Alt.Log("服务已启动");
    }

    public override void OnStop()
    {
        Alt.Log("服务已停止");
    }
}