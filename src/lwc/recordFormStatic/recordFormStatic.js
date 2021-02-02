import { LightningElement, api } from 'lwc';

export default class RecordFormEditExample extends LightningElement {
    // The record page provides recordId and objectApiName values
    fields = ['Name', 'AnnualRevenue', 'Industry'];
    @api recordId;
    @api objectApiName;
}