import { Component } from '@angular/core';
import { PresonasService } from './presonas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontAngular';


  personas: { nombre: string, apellido: string, edad: number, correo: string }[] = [];


  constructor(private presonasService: PresonasService) { }

  ngOnInit(): void {

    this.presonasService.getPersonas().subscribe(
      (data: any[]) => {
        this.personas = data;
        console.log("estoy dentro");
        console.log(JSON.stringify(this.personas[0]));
      },
      (error) => {
        console.error('Error al obtener los datos de las personas:', error);
      }
    );
    console.log("estoy afuera");
    console.log(JSON.stringify(this.personas));
  }
}
