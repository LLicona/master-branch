import { LightningElement,api } from 'lwc';

export default class MainWebComponent extends LightningElement {
    @api itemFields = ['Name', 'AnnualRevenue', 'Industry'];
    @api recordId;
    @api objectApiName;
}