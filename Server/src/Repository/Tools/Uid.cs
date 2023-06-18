namespace Src.Repository.Tools;

public static class Uid
{
    /// <summary>
    /// 创建Uid的静态方法
    /// </summary>
    /// <returns></returns>
    public static int UidCreate()
    {
        Random random = new Random();
        return random.Next(10000000, 20000000);
    }
}
