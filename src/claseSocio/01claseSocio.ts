export class Socio {


    private _Nombre: string;
    private _Apellidos: string;
    private _Socio: number;
    private _DNI: string;
    private _Telefono: number;
    private _Sexo: string;


    constructor(nombre: string, apellidos: string, socio: number, dni: string, telefono: number, sexo: string) {

        this._Nombre = nombre;
        this._Apellidos = apellidos;
        this._Socio = socio;
        this._DNI = dni;
        this._Telefono = telefono;
        this._Sexo = sexo;




    }

    set Nombre(nombre: string) {
        this._Nombre = nombre;
    }
    set Apellidos(apellidos: string) {
        this._Apellidos = apellidos;
    }
    set Socio(socio: number) {
        this._Socio = socio;
    }
    set DNI(dni: string) {
        this._DNI = dni;
    }
    set Telefono(telefono: number) {
        this._Telefono = telefono;
    }
    set Sexo(sexo: string) {
        this._Sexo = sexo;
    }



    get Nombre() {
        return this._Nombre;
    }

    get Apellidos() {
        return this._Apellidos;
    }

    get Socio() {
        return this._Socio;
    }

    get DNI() {
        return this._DNI;
    }


    get Telefono() {
        return this._Telefono;
    }

    get Sexo() {
        return this._Sexo;
    }


}
