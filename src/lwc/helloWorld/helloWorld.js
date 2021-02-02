import { LightningElement, track, api } from 'lwc';
 
export default class HelloWorld extends LightningElement {
    @api firstName    = ''; //Public attribute
    @track lastName   = ''; //Private attribute, Permite rastrear nuevos valores cuando estos cambien
    @track x = {
        a : "",
        b : ""
    };

    handleChange(event) {
        const field = event.target.name;

        if(field === 'firstName'){
            this.firstName = event.target.value;
        }
        //Si se utiliza el else ya no seria necesario el metodo handleChange2
        // else{
        //     this.lastName = event.target.value;
        // }
    }

    handleChange2(event) {
        const field2 = event.target.name;

        if(field2 === 'lastName'){
            this.lastName = event.target.value;
        }
    }

    init() {
        this.x.a = "a";
        this.x.b = "b";
    }

    update() {
        this.x.a = "aa";
        this.x.b = "bb";
    }
}