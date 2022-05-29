import { Component, ViewChild  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import{Socio} from '../../claseSocio/01claseSocio'
import { MatTable } from '@angular/material/table';
import {MatExpansionPanel} from '@angular/material/expansion';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],


})


export class FormularioComponent {

  @ViewChild(MatTable) tablaSocios: MatTable<Socio>;
  @ViewChild(MatExpansionPanel) desplegable1: MatExpansionPanel;


  displayedColumns: string[] = ['botones','socio','nombre', 'apellidos', 'dni', 'telefono', 'sexo'];

    panelOpenState = false;
    addressForm = this.fb.group({
      nombre: [null, Validators.compose([
        Validators.required, Validators.minLength(3)])
      ],
      apellidos: [null, Validators.compose([
        Validators.required, Validators.minLength(3)])
      ],
      dni: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)])
      ],
      telefono: [null, Validators.compose([
        Validators.required, Validators.minLength(9)])
      ],

      sexo: ['mujer', Validators.required]
    });

    hasUnitNumber = false;

   public Socios:Socio[];

   public indexModificar:number;

    constructor(private fb: FormBuilder) {
      this.Socios=new Array<Socio>();
      this.indexModificar=-1;
    }


    onSubmit(): void {
      if (this.addressForm.status=="VALID"){

    if (this.indexModificar==-1){
      let numeroSocio=1;
        for(let socio of this.Socios){
          if (socio.Socio>=numeroSocio){
            numeroSocio=socio.Socio+1;
          }
        }
      let Socio1 = new Socio(this.addressForm.value.nombre, this.addressForm.value.apellidos, numeroSocio, this.addressForm.value.dni, this.addressForm.value.telefono, this.addressForm.value.sexo,)
    console.log(Socio1)

    this.Socios.push(Socio1)
    this.tablaSocios.renderRows()}

    else{

      this.Socios[this.indexModificar].Nombre=this.addressForm.value.nombre
      this.Socios[this.indexModificar].Apellidos=this.addressForm.value.apellidos
      this.Socios[this.indexModificar].DNI=this.addressForm.value.dni
      this.Socios[this.indexModificar].Telefono=this.addressForm.value.telefono
      this.Socios[this.indexModificar].Sexo=this.addressForm.value.sexo
      this.indexModificar=-1
    }
    this.addressForm.setValue({
      nombre:"",
      apellidos:"",
      dni:"",
      telefono:"",
      sexo:"",
    })
    console.log(this.addressForm)
    this.addressForm.markAsUntouched()
    this.addressForm.markAsPristine()
  }
  }

    eliminarSocio(socio:number): void {
      this.Socios=this.Socios.filter((item)=>{return item.Socio!=socio})
      this.tablaSocios.renderRows()

    }
  modificarSocio(socio:number): void {
    let lista=this.Socios.filter((item)=>{return item.Socio===socio})
    this.addressForm.setValue({
      nombre:lista[0].Nombre,
      apellidos:lista[0].Apellidos,
      dni:lista[0].DNI,
      telefono:lista[0].Telefono,
      sexo:lista[0].Sexo,
    })
    this.indexModificar=this.Socios.findIndex((item)=>{return item.Socio===socio})
    this.desplegable1.open();


  console.log(lista)

  }



  }



