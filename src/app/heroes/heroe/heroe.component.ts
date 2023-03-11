import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'IroMan';
    edad  : number = 45;

    obtnerNombre():string{
        return `Nombre: ${this.nombre } - Edad: ${this.edad }`;
       
    }

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre():void {
        console.log(this.nombre);
        
        if ( this.nombre == 'IroMan') {
             this.nombre = 'Spideman';
        }
        else
        {
            this.nombre = 'IroMan';            
        }
        
    }

    cambiarEdad():void {
        console.log(this.edad);
        
        if ( this.edad == 45 ) {
             this.edad = 30;
        }
        else
        {
            this.edad = 45;            
        }
        
    }
}