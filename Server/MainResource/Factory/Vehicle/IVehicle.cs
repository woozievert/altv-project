using AltV.Net;
using AltV.Net.Data;

namespace MainResource.Factory.Vehicle;

public class IVehicle : AltV.Net.Elements.Entities.Vehicle
{
    public IVehicle(ICore core, uint model, Position position, Rotation rotation) : base(core, model, position,
        rotation)
    {
    }
}