using AltV.Net;
using AltV.Net.Elements.Entities;

namespace Src.Factory.TPlayer;

public class TPlayerFactory : IEntityFactory<IPlayer>
{
    public IPlayer Create(ICore core, IntPtr entityPointer, ushort id)
    {
        return new TPlayer(core, entityPointer, id);
    }
}