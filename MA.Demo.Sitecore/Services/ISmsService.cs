namespace MA.Demo.Sitecore.Services
{
    public interface ISmsService
    {
        void SendMessage(string body, string recipientMobileNumber);
    }    
}
