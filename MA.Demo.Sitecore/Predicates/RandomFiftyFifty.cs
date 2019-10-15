using Sitecore.Framework.Rules;
using Sitecore.XConnect;
using System;
using System.Linq;

namespace MA.Demo.Sitecore.Predicates
{
    public class RandomFiftyFifty : ICondition
    {
        public bool Evaluate(IRuleExecutionContext context)
        {
            Contact contact = context.Fact<Contact>();

            if (contact != null && contact.Interactions != null && contact.Interactions.Any())
            {
                Interaction latestInteraction = contact.Interactions.OrderByDescending(e => e.LastModified).First();
                if (latestInteraction != null && latestInteraction.LastModified != null)
                    return (latestInteraction.LastModified.GetHashCode() % 2) == 0;
            }
            return new Random().Next(2) == 0;
        }
    }
}
