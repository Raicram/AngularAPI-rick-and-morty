import { Component, OnInit } from '@angular/core';
import {Character} from '../character.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss']
})
export class RickandmortyComponent implements OnInit {
  characters$: Character[];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    return this.dataService.getCharacters()
      .subscribe(data => {
        this.characters$ = this.parsing(data);
        console.log(this.characters$);
      });
  }

  parsing(data){
    return data.results;
  }
}
