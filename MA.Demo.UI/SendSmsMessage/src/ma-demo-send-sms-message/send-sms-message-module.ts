import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SendSmsMessageEditorComponent } from './editor/send-sms-message-editor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [SendSmsMessageEditorComponent],
    entryComponents: [SendSmsMessageEditorComponent]
})
export class SendSmsMessageModule { }