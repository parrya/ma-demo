using MA.Demo.Sitecore.Services;
using Sitecore.XConnect;
using Sitecore.XConnect.Collection.Model;
using Sitecore.Xdb.MarketingAutomation.Core.Activity;
using Sitecore.Xdb.MarketingAutomation.Core.Processing.Plan;
using System;
using System.Text.RegularExpressions;

namespace MA.Demo.Sitecore.Activities
{
    public class SendSmsMessageActivity : IActivity
    {
        #region Private members
        private ISmsService _smsSendingService { get; set; }
        private string _preferredPhoneKey = "Mobile";
        private Regex _regexCountryCode = new Regex(@"^(\+?\d{1,4})$");
        #endregion Private members

        #region Public members
        public IActivityServices Services { get; set; }
        public string Message { get; set; }
        #endregion Public members

        public SendSmsMessageActivity(ISmsService _smsService)
        {
            _smsSendingService = _smsService;            
        }
        
        public ActivityResult Invoke(IContactProcessingContext context)
        {
            if (!string.IsNullOrEmpty(this.Message))
            {
                Guid planDefinitionId = context.ActivityEnrollment.EnrollmentKey.PlanDefinitionId;
                Contact contact = context.Contact;
                if (contact != null)
                {
                    string phoneNumberFacetKey = PhoneNumberList.DefaultFacetKey;
                    var facet = context.Contact.GetFacet<PhoneNumberList>(phoneNumberFacetKey);
                    if (facet != null && facet.PreferredKey != null && facet.PreferredKey.Equals(_preferredPhoneKey) && facet.PreferredPhoneNumber != null && PhoneNumberIsValid(facet.PreferredPhoneNumber))
                    {
                        var mobileNumber = GetInternationalMobileNumberForSending(facet.PreferredPhoneNumber);
                        _smsSendingService.SendMessage(Message, mobileNumber);
                    }
                }
            }
            return new SuccessMove();
        }

        #region Private methods
        private bool PhoneNumberIsValid(PhoneNumber phone)
        {            
            bool countryCodeIsValid = _regexCountryCode.Match(phone.CountryCode).Success;
            Regex regexPhoneNumber = new Regex(@"\D");
            bool phoneIsValid = regexPhoneNumber.Replace(phone.Number, "").Length < 16;
            return countryCodeIsValid && phoneIsValid;
        }
       
        private string GetInternationalMobileNumberForSending(PhoneNumber mobileNumber)
        {
            Regex regexDigitsOnly = new Regex(@"\D");
            var cc = $"+{regexDigitsOnly.Replace(mobileNumber.CountryCode, "")}";
            var mobile = regexDigitsOnly.Replace(mobileNumber.Number, "");
            mobile = mobile.StartsWith("0") ? mobile.Remove(0, 1) : mobile;
            var internationalMobileNumber = $"{cc}{mobile}";
            return internationalMobileNumber;
        }
        #endregion Private methods
    }
}
