using Sitecore.XConnect;
using Sitecore.XConnect.Client;
using Sitecore.XConnect.Client.WebApi;
using Sitecore.XConnect.Collection.Model;
using Sitecore.XConnect.Schema;
using Sitecore.Xdb.Common.Web;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MA.Demo.Xconnect.Utils.Models;

namespace MA.Demo.Xconnect.Utils
{
    public class Program
    {
        static void Main(string[] args)
        {
            MainAsync(args).ConfigureAwait(false).GetAwaiter().GetResult();
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WriteLine("");
            Console.WriteLine("END OF PROGRAM.");
            Console.ReadKey();

        }

        private static async Task MainAsync(string[] args)
        {
            Console.WriteLine("Which environment do you wish to connect to? 1=LocalDev, 2=Other");
            Console.WriteLine();
            Console.WriteLine("1 = LocalDev");
            Console.WriteLine("2 = Other");
            var environment = Console.ReadLine();

            string xConnectUrlBase;
            string thumbPrint;

            #region configurehttp
            switch (environment)
            {
                case "1":
                    {
                        Console.WriteLine("Configuring LocalDev connection");
                        xConnectUrlBase = "https://ma-demo.xconnect";
                        thumbPrint = "980B856A175B2673C79ECB7140C2EE2B1ADD81B3";
                        break;
                    }
                case "2":
                    {
                        Console.WriteLine("Other");
                        xConnectUrlBase = "[your xConnect URL here]";
                        thumbPrint = "[your thumbprint here]";
                        break;
                    }
                default:
                    {
                        Console.WriteLine("Nothing to see here");
                        xConnectUrlBase = "???";
                        thumbPrint = "???";
                        return;
                    }
            }

            CertificateHttpClientHandlerModifierOptions options = CertificateHttpClientHandlerModifierOptions.Parse($"StoreName=My;StoreLocation=LocalMachine;FindType=FindByThumbprint;FindValue={thumbPrint}");

            var certificateModifier = new CertificateHttpClientHandlerModifier(options);

            List<IHttpClientModifier> clientModifiers = new List<IHttpClientModifier>();
            var timeoutClientModifier = new TimeoutHttpClientModifier(new TimeSpan(0, 0, 20));
            clientModifiers.Add(timeoutClientModifier);

            // Ensure configuration pointing to appropriate instance of xconnect
            var collectionClient = new CollectionWebApiClient(new Uri($"{xConnectUrlBase}/odata"), clientModifiers, new[] { certificateModifier });
            var searchClient = new SearchWebApiClient(new Uri($"{xConnectUrlBase}/odata"), clientModifiers, new[] { certificateModifier });
            var configurationClient = new ConfigurationWebApiClient(new Uri($"{xConnectUrlBase}/configuration"), clientModifiers, new[] { certificateModifier });


            XdbModel[] models = { CollectionModel.Model };


            var cfg = new XConnectClientConfiguration(new XdbRuntimeModel(models), collectionClient, searchClient, configurationClient);

            try
            {
                await cfg.InitializeAsync();
            }
            catch (XdbModelConflictException ce)
            {
                Console.WriteLine("ERROR:" + ce.Message);
                return;
            }
            #endregion            

            Console.WriteLine("What action are you performing?");
            Console.WriteLine("1=Update Personal Info Facet");
            Console.WriteLine("2=Update Phone Number List Facet");
            Console.WriteLine("3=Create interaction");
            Console.WriteLine("4=Create New Contacts");
            var action = Console.ReadLine();

            switch (action)
            {
                case "1":
                    {
                        Console.WriteLine("Enter an xDB contact ID");
                        var contactId = Console.ReadLine();
                        Console.WriteLine("First name?");
                        var firstName = Console.ReadLine();
                        Console.WriteLine("Last name?");
                        var lastName = Console.ReadLine();
                        Console.WriteLine("Nickname?");
                        var nickname = Console.ReadLine();
                        await UpdatePersonalInfoFacet(cfg, Guid.Parse(contactId), firstName, lastName, nickname);
                        break;
                    }

                case "2":
                    {
                        Console.WriteLine("Enter an xDB contact ID");
                        var contactId = Console.ReadLine();
                        Console.WriteLine("Country code?");
                        var countryCode = Console.ReadLine();
                        Console.WriteLine("Mobile number?");
                        var mobileNumber = Console.ReadLine();
                        await UpdatePhoneNumberListFacet(cfg, Guid.Parse(contactId), countryCode, mobileNumber);
                        break;
                    }
                case "3":
                    {
                        //Do interactiony things
                        Console.WriteLine("Enter an xDB contact ID");
                        var contactId = Console.ReadLine();
                        await CreateInteraction(cfg, Guid.Parse(contactId));
                        break;
                    }
                case "4":
                    {
                        Console.WriteLine("Creating contacts");
                        await CreateContacts(cfg);
                        break;
                    }
                default:
                    {
                        return;
                    }
            }
            Console.WriteLine();
            Console.ReadLine();
        }

        private static async Task CreateContacts(XConnectClientConfiguration xConfig)
        {
            // Initialize a client using the validated configuration
            using (var client = new XConnectClient(xConfig))
            {
                try
                {
                    List<ContactModel> contacts = new List<ContactModel>();

                    contacts.Add(new ContactModel { FirstName = "Bob", Surname = "Roberts", DateOfBirth = new DateTime(1947, 12, 9) });
                    contacts.Add(new ContactModel { FirstName = "Kevin", Surname = "Kline", DateOfBirth = new DateTime(1949, 2, 3) });
                    contacts.Add(new ContactModel { FirstName = "David", Surname = "Tennant", DateOfBirth = new DateTime(1977, 11, 16) });
                    contacts.Add(new ContactModel { FirstName = "Sandra", Surname = "Sanders", DateOfBirth = new DateTime(1981, 1, 22) });
                    contacts.Add(new ContactModel { FirstName = "Sarah", Surname = "Jones", DateOfBirth = new DateTime(1985, 9, 9) });
                    contacts.Add(new ContactModel { FirstName = "Ronnie", Surname = "Lane", DateOfBirth = new DateTime(1972, 8, 16) });
                    contacts.Add(new ContactModel { FirstName = "Gemma", Surname = "Walker", DateOfBirth = new DateTime(1991, 10, 15) });
                    contacts.Add(new ContactModel { FirstName = "John", Surname = "Wick", DateOfBirth = new DateTime(2001, 8, 25) });

                    foreach (var m in contacts)
                    {
                        Random rnd = new Random();
                        var identifiers = new ContactIdentifier[]
                        {
                            new ContactIdentifier("CustomerRef", $"{m.Surname}-{m.DateOfBirth.Year.ToString()}{rnd.Next(100,999)}",  ContactIdentifierType.Known)
                        };

                        // Create a new contact with the identifier
                        Contact newContact = new Contact(identifiers);

                        PersonalInformation personalInfoFacet = new PersonalInformation();
                        personalInfoFacet.FirstName = m.FirstName;
                        personalInfoFacet.LastName = m.Surname;
                        personalInfoFacet.Birthdate = m.DateOfBirth;

                        client.SetFacet<PersonalInformation>(newContact, PersonalInformation.DefaultFacetKey, personalInfoFacet);
                        client.AddContact(newContact);

                        // Submit contact
                        await client.SubmitAsync();

                        // Get the last batch that was executed
                        var operations = client.LastBatch;

                        Console.WriteLine("RESULTS...");

                        //// Loop through operations and check status
                        foreach (var operation in operations)
                        {
                            Console.WriteLine(operation.OperationType + operation.Target.GetType().ToString() + " Operation: " + operation.Status);
                        }
                    }
                }
                catch (XdbExecutionException ex)
                {
                    // Deal with exception
                }
            }
        }

        private static async Task UpdatePersonalInfoFacet(XConnectClientConfiguration xConfig, Guid contactId, string firstName, string lastName, string nickName)
        {
            // Initialize a client using the validated configuration
            using (var client = new XConnectClient(xConfig))
            {
                try
                {
                    Contact contact;
                    var reference = new Sitecore.XConnect.ContactReference(contactId);

                    // Get a reference to the facet by name
                    string personalInfoFacetKey = PersonalInformation.DefaultFacetKey;

                    // Pass the facet name into the ContactExpandOptions constructor
                    var contactTask = client.GetAsync<Contact>(reference, new ContactExpandOptions(personalInfoFacetKey));

                    contact = await contactTask;

                    if (contact != null)
                    {
                        var personalInfoFacet = contact.GetFacet<PersonalInformation>(personalInfoFacetKey);

                        if (personalInfoFacet != null)
                        {
                            // Change facet properties
                            personalInfoFacet.FirstName = firstName;
                            personalInfoFacet.LastName = lastName;
                            personalInfoFacet.Nickname = nickName;
                            
                            //Update facet in contact
                            client.SetFacet(contact, personalInfoFacet);
                        }
                        else
                        {
                            // Facet is new
                            PersonalInformation newFacet = new PersonalInformation();
                            newFacet.FirstName = firstName;
                            newFacet.LastName = lastName;
                            newFacet.Nickname = nickName;

                            client.SetFacet(contact, newFacet);
                        }

                        await client.SubmitAsync();
                    }

                    Console.ReadLine();

                }
                catch (XdbExecutionException ex)
                {
                    // Deal with exception
                }
            }
        }

        private static async Task UpdatePhoneNumberListFacet(XConnectClientConfiguration xConfig, Guid contactId, string countryCode, string mobileNumber)
        {
            // Initialize a client using the validated configuration
            using (var client = new XConnectClient(xConfig))
            {
                try
                {
                    Contact contact;
                    var reference = new Sitecore.XConnect.ContactReference(contactId);

                    // Get a reference to the facet by name
                    string phoneNumberFacetKey = PhoneNumberList.DefaultFacetKey;

                    // Pass the facet name into the ContactExpandOptions constructor
                    var contactTask = client.GetAsync<Contact>(reference, new ContactExpandOptions(phoneNumberFacetKey));

                    contact = await contactTask;

                    if (contact != null)
                    {
                        var phoneFacet = contact.GetFacet<PhoneNumberList>(phoneNumberFacetKey);

                        if (phoneFacet != null)
                        {
                            // Change facet properties
                            phoneFacet.PreferredPhoneNumber = new PhoneNumber(countryCode, mobileNumber);
                            phoneFacet.PreferredKey = "Mobile";

                            //Update facet in contact
                            client.SetFacet(contact, phoneFacet);
                        }
                        else
                        {
                            // Facet is new
                            PhoneNumberList newPhoneFacet = new PhoneNumberList(new PhoneNumber(countryCode, mobileNumber), "Mobile");
                            client.SetFacet(contact, newPhoneFacet);
                        }

                        await client.SubmitAsync();
                    }

                    Console.ReadLine();

                }
                catch (XdbExecutionException ex)
                {
                    // Deal with exception
                }
            }
        }


        private static async Task CreateInteraction(XConnectClientConfiguration xConfig, Guid contactId)
        {
            // Initialize a client using the validated configuration
            using (var client = new XConnectClient(xConfig))
            {
                try
                {
                    Contact contact;
                    var reference = new Sitecore.XConnect.ContactReference(contactId);

                    // Get a reference to the facet by name
                    string personalInfoFacetKey = PersonalInformation.DefaultFacetKey;

                    // Get the contact and PersonalInfo facet
                    var contactTask = client.GetAsync<Contact>(reference, new ContactExpandOptions(personalInfoFacetKey));

                    contact = await contactTask;

                    var channelId = Guid.Parse("B418E4F2-1013-4B42-A053-B6D4DCA988BF"); // Channel=/Online/Direct (from /sitecore/system/Marketing Control Panel/Taxonomies/Channel)
                    var userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1";
                    
                    var interaction = new Sitecore.XConnect.Interaction(contact, InteractionInitiator.Brand, channelId, userAgent);

                    var goalId = Guid.Parse("968897F1-328A-489D-88E8-BE78F4370958"); //Brochure request
                    var goal = new Goal(goalId, DateTime.UtcNow);
                    goal.EngagementValue = 20;

                    interaction.Events.Add(goal);
                    client.AddInteraction(interaction);

                    await client.SubmitAsync();
                }
                catch (XdbExecutionException ex)
                {
                    // Deal with exception
                }
            }
        }

        private static async Task GetContact(XConnectClientConfiguration xConfig, Guid contactId)
        {
            // Initialize a client using the validated configuration
            using (var client = new XConnectClient(xConfig))
            {
                try
                {
                    Contact contact;
                    var reference = new Sitecore.XConnect.ContactReference(contactId);

                    // Get a reference to the facet by name
                    string personalInfoFacetKey = PersonalInformation.DefaultFacetKey;

                    // Pass the facet name into the ContactExpandOptions constructor
                    var contactTask = client.GetAsync<Contact>(reference, new ContactExpandOptions(personalInfoFacetKey));

                    contact = await contactTask;

                    Console.ReadLine();
                }
                catch (XdbExecutionException ex)
                {
                    // Deal with exception
                }
            }
        }
    }
}

