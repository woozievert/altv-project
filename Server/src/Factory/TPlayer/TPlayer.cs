using AltV.Net;
using AltV.Net.Data;
using Src.Model;
using Src.Repository.Tools;
using AltV.Net.Elements.Entities;

namespace Src.Factory.TPlayer;

/// <summary>
/// 玩家工厂实体
/// </summary>
public class TPlayer : Player
{
    public TPlayer(ICore core, IntPtr nativePointer, ushort id) : base(core, nativePointer, id)
    {
        IsLogin = false;
    }

    public int PlayerId { get; set; }
    public string PlayerName { get; set; }
    public bool IsLogin { get; set; }

    public new Position Position { get; set; }

    public int World { get; set; }

}