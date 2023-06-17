namespace Model.Model.IPlayer;

/// <summary>
/// 登录数据实体类
/// </summary>
public class User
{
    public int Id { get; set; }
    /// <summary>
    /// 用户游戏内唯一标识 8位ID
    /// </summary>
    /// <value></value>
    public int Uid { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    /// <summary>
    /// 注册时间 应在注册时自动赋值
    /// </summary>
    /// <value></value>
    public DateTime RegisterTime { get; set; }
    /// <summary>
    /// 最后一次登录
    /// </summary>
    /// <value></value>
    public DateTime LastLoginTime { get; set; }

}
