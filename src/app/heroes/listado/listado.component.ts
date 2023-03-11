import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls  :['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[] =['Spiderman','IroMan','SuperMan','Padres'];
  heroeBorrado :string = '';

  borrarHeroe():void {
     this.heroeBorrado = this.heroes.shift() || '';
  }
}
