import { Component, OnInit } from '@angular/core';
import {WordService} from '../../service/word.service';
import {IWord} from '../../model/iword';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  dictionary: IWord[];
  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.dictionary = this.wordService.getAll();
  }
}
