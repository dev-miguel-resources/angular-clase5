import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'; //para trabajar con el objeto local del formulario

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})

export class TemplateComponent{

  usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "CHI",
    nombre: "Chile"
  },
  {
    codigo: "ESP",
    nombre: "España",
  }]

  sexos:string[] = ["Hombre", "Mujer"]; //para hacerlo dinámico el radio button

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    //console.log('Formulario posteado');
    console.log(forma);
    console.log('Valor', forma.value);
    console.log('Usuario', this.usuario);
  }

}
