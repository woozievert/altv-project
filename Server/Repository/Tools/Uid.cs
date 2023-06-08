namespace Repository.Tools;

public static class Uid
{
    public static int UidCreate()
    {
        Random random = new Random();
        return random.Next(10000000, 20000000);
    }
}
