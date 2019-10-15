using Twilio;
using Twilio.Rest.Api.V2010.Account;
using System.Configuration;

namespace MA.Demo.Sitecore.Services
{
    public class SmsService : ISmsService
    {
        private string _fromNumber => ConfigurationManager.AppSettings["MA.Demo.Sitecore.Twilio.FromNumber"];
        private string _accountSid => ConfigurationManager.AppSettings["MA.Demo.Sitecore.Twilio.SID"];
        private string _authToken => ConfigurationManager.AppSettings["MA.Demo.Sitecore.Twilio.AuthToken"];

        public SmsService()
        {

        }

        public void SendMessage(string body, string recipientMobileNumber)
        {            
            TwilioClient.Init(_accountSid, _authToken);

            var smsMessage = MessageResource.Create(
                body: body,
                from: new Twilio.Types.PhoneNumber(_fromNumber),
                to: new Twilio.Types.PhoneNumber(recipientMobileNumber)
            );
        }        
    }
}
