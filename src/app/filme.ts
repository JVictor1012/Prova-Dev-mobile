import { IonImg } from "@ionic/angular";

export class Filme{
    titulo: string;
    diretor: string;
    genero: string;
    cartaz: any;
    ano: number;

    constructor(){
        this.titulo = ''
        this.diretor = ''
        this.genero =  ''
        this.cartaz =  ''
        this.ano = 0
    }

}