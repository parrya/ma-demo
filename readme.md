# ma-demo

## Purpose
This project provides sample code, utilities, and Sitecore items to demonstrate how to extend Sitecore's Marketing Automation with custom Activity Types.

It contains the front end Angular code, .NET code and Sitecore items to deploy a custom Activity Type that sends an SMS via Twilio.

## Pre-requisites
- your own Twilio account and API key
- Sitecore 9.1 or later and a Sitecore license
- local file system access to the path <webroot>/sitecore/shell/client/Applications/MarketingAutomation/packages/ma-core
- Node
- npm
- Visual Studio 2017 or later

## Contents
### MA.Demo.Sitecore
This contains the main solution file, config files, and .NET Code for the Activity Type class, the Predicate class, and the SMS sending service.

### MA.Demo.UI
Contains the Angular code necessary to build the SendSMS Activity Type JavaScript plugin class for deployment to Sitecore

### MA.Demo.xConnect
Contains the configuration patch files and Twillio app settings for the Marketing Automation engine.

### MA.Demo.xConnect.Utils
This is a console app which can be used to create some xDB contacts for testing, update Personal Info and Phone Number facets, and submit an interaction against a contact to xConnect with the intention of enrolling a contact in a Marketing Automation plan.

### sitecore-packages
Packaged Sitecore items for SMS Activity Type descriptor and sample Predicate class.

## Installation
Firstly install the pre-requisites listed above.

### Front end (activity editor)
- from the command prompt or shell, navigate to the MA.Demo.UI/SendSmsMessage folder
- run *npm install*
- edit package.json and update line 20 with the path to your local Sitecore instance. This will be necessary for importing the Sitecore specific modules, without which your build will fail.
- run *npm run dev* to build the front end solution
- if you get an error on rimraf, install it using the -g global parameter and the specific version listed in the package.json
- any other errors are likely to be package related or folder permissions on the output folder (e.g. readonly).
- if no errors, you should have a new *sendsmsmessage.plugin.js* file in the *\MA.Demo.UI\SendSmsMessage\dist\* folder
- copy the plugin to the *\sitecore\shell\client\Applications\MarketingAutomation\plugins* folder in your Sitecore webroot
- if you cannot get it to build and there's no Front End wizards around, you can deploy the plugin JS file from the Sitecore solution and still be able to run the demo

### .NET code (Activity Type class)
- Restore nuget packages.
- Build the VS solution.
- Deploy the built files and configs to your Sitecore webroot (this will be the DLL, the plugin config, and the plugin JS (if you want to)

### Automation Engine
In a local XP0 install, the Automation Engine will be in your xConnect webroot in subfolder *\App_Data\jobs\continuous\AutomationEngine*  (the engine root)
First, turn off your Automation Engine service from the Services control panel, otherwise the DLLs will not copy across.
You will need to deploy the following to the engine root:
- MA.Demo.Sitecore.dll
- the MarketingAutomation_patch files to: *\App_Data\Config\sitecore*

### Sitecore
Install the package.

### xConnect Utils
- Find the thumbprint for you xConnect client certificate and install it. 
OR, disable client certificates by commenting out the lines in your xConnect *App_Config\AppSettings.config* file:

```
<!-- <add key="AllowInvalidClientCertificates" value="false" /> -->
<!-- <add key="validateCertificateThumbprint" value="your thumbprint" /> -->
```

When you browse to the OData API you will be asked for a certificate. Just click escape or cancel and it will load after that.

## To use
- configure your Twillio settings
- Create a marketing Automation plan
- PROFIT











