import { SingleItem} from '@sitecore/ma-core';
 
export class SendSmsMessageActivity extends SingleItem {
    getVisual(): string {
        const title= 'Send SMS message';
        const subTitle = 'Send an SMS message';
        const cssClass = this.isDefined ? '' : 'undefined';
        
        return `
            <div class="viewport-send-sms-editor marketing-action ${cssClass}">
                <span class="icon">
                    <img src="/~/icon/OfficeWhite/32x32/graph_from.png" />
              </span>
                <p class="text with-subtitle" title="${title}">
                    ${title}
                    <small class="subtitle" title="${subTitle}">${subTitle}</small>
                </p>
            </div>
        `;
    }
 
    get isDefined(): boolean {
            return true;
    }
}