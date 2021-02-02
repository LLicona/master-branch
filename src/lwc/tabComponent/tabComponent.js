import { LightningElement,api } from 'lwc';

export default class TabComponent extends LightningElement {
    showTabTwo = true;
    @api itemFields;
    @api recordId;
    @api objectApiName;
}