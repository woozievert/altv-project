using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Src.CommandSystem {
    [AttributeUsage(AttributeTargets.Method)]
    public class CommandEvent : Attribute {
        public CommandEventType EventType { get; }

        public CommandEvent(CommandEventType eventType) {
            EventType = eventType;
        }
    }
}
