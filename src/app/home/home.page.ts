import { Component } from '@angular/core';
import { Filme } from '../filme';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listFilmes: Filme[]

  constructor(private service: FilmesService) {
    this.listFilmes = service.getFilmes()
  }


}


