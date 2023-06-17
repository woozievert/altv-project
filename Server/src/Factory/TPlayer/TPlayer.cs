using AltV.Net;
using src.Model;
using src.Repository.Tools;
using AltV.Net.Elements.Entities;

namespace src.Factory.TPlayer;

/// <summary>
/// 玩家工厂实体
/// </summary>
public class TPlayer : AltV.Net.Elements.Entities.Player
{
    public TPlayer(ICore core, IntPtr nativePointer, ushort id) : base(core, nativePointer, id)
    {
        IsLogin = false;
    }

    public int PlayerId { get; set; }
    public string PlayerName { get; set; }
    public bool IsLogin { get; set; }
}