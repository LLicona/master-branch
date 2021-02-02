import { LightningElement, wire, track, api } from 'lwc';
import findContacts from '@salesforce/apex/contactController_ctrl.findContacts';

export default class ComponentWithApex extends LightningElement {
    @api recordId;
    @track searchKey = '';
    @api contacts;
    @api error;
    
    // Forma simple de ejecutar el metodo al iniciar
    // @wire (findContacts,{searchKey: '$searchKey'})
    // contacts;

    //Función similar al DoInit en un Aura component
    connectedCallback() {
        console.log('ID---> ',this.recordId); 
    }
    
    // Forma de ejecutar un metodo apex con una función
    @wire(findContacts,{searchKey: '$searchKey'})
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
            console.log('-----records----> ',data);
            console.log('RECORDID---> ',this.recordId);
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    // Función que se ejecuta al momento de escribir en el input de busqueda
    handleKeyChange(){
        this.searchKey = this.template.querySelector('lightning-input').value;
    }
}