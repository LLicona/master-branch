import { LightningElement,api } from 'lwc';

export default class RecordFormChildren extends LightningElement {
    @api itemFields;
    @api recordId;
    @api objectApiName;
}