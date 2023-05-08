import { Injectable } from '@angular/core';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  filmes : Filme[]
  f1 = new Filme
  f2 = new Filme
  f3 = new Filme
  f4 = new Filme

  

  constructor() { 
    this.filmes = [this.f1, this.f2,  this.f3, this.f4]

    this.f1.titulo = "O Poderoso Chefão"
    this.f1.diretor = "Francis Ford Coppola"
    this.f1.genero = "Drama"
    this.f1.cartaz = 'https://br.web.img3.acsta.net/c_310_420/pictures/20/11/13/09/40/3478562.jpg'
    this.f1.ano = 1990

    this.f2.titulo = "Shrek"
    this.f2.diretor = "Vicky Jenson, Andrew Adamson"
    this.f2.genero = "Fantasia/Comédia"
    this.f2.cartaz = 'https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg'
    this.f2.ano = 2001

    this.f3.titulo = "Matrix"
    this.f3.diretor = "Lana Wachowski, Lilly Wachowski"
    this.f3.genero = "Ficção Científica/Ação"
    this.f3.cartaz = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwLB63Bm8WaqqWPmYLi9_wEXXt47qq1UZBSzw05b9NrXlQyN-O'
    this.f3.ano = 1999

    this.f4.titulo = "Star Wars: O Retorno de Jedi"
    this.f4.diretor = "Richard Marquand"
    this.f4.genero = "Ficção Científica/Ação"
    this.f4.cartaz = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQr4kO9vjPzbMRIcCHbLWg-k0EtQi1SEzBubJGdP_rxWtU1Ieqb'
    this.f4.ano = 1999



  }

  
  getFilmes(){
    console.log(this.filmes)
    return this.filmes
  }


}

