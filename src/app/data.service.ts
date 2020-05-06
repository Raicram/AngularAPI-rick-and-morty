import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from './character.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private _HTTP: HttpClient) { }

  getCharacters(){
        return this._HTTP.get<Character[]>(this.apiUrl);
      }
  }
