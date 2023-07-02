using Src.Enum.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Src.CommandSystem {
    [AttributeUsage(AttributeTargets.Method)]
    public class Command : Attribute {
        public string[] Aliases { get; }
        public bool GreedyArg { get; }
        public string Name { get; }
        public Admin AdminLevel { get; }
        public Command(string name ,  bool greedyArg , string[] aliases ,Admin adminlevel) {

            Name = name;
            GreedyArg = greedyArg;
            Aliases = aliases;
            AdminLevel = adminlevel;
            
        }

    }
}
