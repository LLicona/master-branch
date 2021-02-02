import { LightningElement, track, api } from 'lwc';
import getContactList from '@salesforce/apex/contactController_ctrl.getContactList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { utilsFunction} from './utilerias';

/* eslint-disable no-console */
/* eslint-disable no-alert */

export default class ApexImperativeMethod extends NavigationMixin(LightningElement) {
    @api recordId;
    @track contacts;
    @track error;
    @track newValue;

    //Ejecuta metodo desde un botón
    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
                this.invokeFunctionInJs();   
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleRedirect(){
        const termOptions = utilsFunction(10);
        console.log('--termOptions--->',termOptions);
        console.log('**ID--> ',this.recordId);
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                actionName: 'view'
            }
        });
    }

    /*
        ##### INVOCA FUNCIONES DENTRO DEL MISMO JS #####
    */
    invokeFunctionInJs(){
        console.log('INGRESO A FUNCIÓN SECUNDARIA');
        this.showNotification('EXITO','Contactos Recuperados','success')
        this.invokeFunctionOtherJs();
    }

    //Invoca función de otro archivo js
    invokeFunctionOtherJs(){
        console.log('INGRESO A FUNCIÓN DE OTRO JS');
        this.newValue = utilsFunction(10);
        console.log('RETURN-> ', this.newValue);
    }

    /*
        ##### SHOW TOAST ########
    */
    showNotification(titulo,mensaje,variante) {
        const evt = new ShowToastEvent({
            title: titulo,
            message: mensaje,
            variant: variante,
        });
        this.dispatchEvent(evt);
    }
}