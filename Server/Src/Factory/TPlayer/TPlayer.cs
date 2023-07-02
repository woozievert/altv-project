using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Src.Enum.Admin;

namespace Src.Factory.TPlayer;

/// <summary>
/// 玩家工厂实体
/// </summary>
public class TPlayer : Player
{
    public TPlayer(ICore core, IntPtr nativePointer, ushort id) : base(core, nativePointer, id)
    {
        PlayerId = id;
        IsLogin = false;
        PlayerName = "无效名称";
        Dimension = 0;
    }

    public int PlayerId { get; set; }
    public string PlayerName { get; set; }
    public bool IsLogin { get; set; }

    public Admin IsAdmin { get; set; }

    public new Position Position { get; set; }

    public int Dimension { get; set; }

}