import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  listWord: IWord[] = [
    {
    id: 1,
    word: 'volleyball',
    meaning: 'bóng chuyền'
  },
    {
      id: 2,
      word: 'football',
      meaning: 'bóng đá'
    },
    {
      id: 3,
      word: 'basketball',
      meaning: 'bóng rổ'
    },
    {
      id: 4,
      word: 'tennis',
      meaning: 'quần vợt'
    },
    {
      id: 5,
      word: 'table tennis',
      meaning: 'bóng bàn'
    },
  ]
  constructor() { }

  getAll(){
    return this.listWord;
  }

  translate(id: number) {
    for (let index in this.listWord) {
      if (id === this.listWord[index].id) {
        return this.listWord[index].meaning;
      }
    }
  }
}
