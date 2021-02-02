/* UTILERIAS.js */
/**
* Returns whether provided value is a function
* @param {*} value - the value to be checked
* @return {boolean} true if the value is a function, false otherwise
*/
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
/* eslint-disable no-console */
/* eslint-disable no-alert */

    const utilsFunction =(value) =>{
        console.log('VALUE-> ',value);
        return value * 2;
    };

    const showNotification = (titulo,mensaje,variante)=> {
        const evt = new ShowToastEvent({
            title: titulo,
            message: mensaje,
            variant: variante,
        });
        this.dispatchEvent(evt);
    }

export{utilsFunction,showNotification};