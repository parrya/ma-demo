import { Plugin } from '@sitecore/ma-core';
import { SendSmsMessageActivity } from './ma-demo-send-sms-message/send-sms-message-activity';
import { SendSmsMessageModuleNgFactory } from '../codegen/ma-demo-send-sms-message/send-sms-message-module.ngfactory';
import { SendSmsMessageEditorComponent } from '../codegen/ma-demo-send-sms-message/editor/send-sms-message-editor.component';
 
// Use the @Plugin decorator to define all the activities the module contains.
@Plugin({
    activityDefinitions: [
        {
            // The ID must match the ID of the activity type description definition item in the CMS.
            id: '7668d457-31f4-4190-8497-d9408005faa5', 
            activity: SendSmsMessageActivity,
            editorComponenet: SendSmsMessageEditorComponent,
            editorModuleFactory: SendSmsMessageModuleNgFactory
        }
    ]
})
export default class SendSmsMessagePlugin {}