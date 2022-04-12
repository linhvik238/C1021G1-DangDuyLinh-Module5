import { Component, OnInit } from '@angular/core';
import {WordService} from '../../service/word.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  id: number;
  meaning: string;

  constructor(
    private service: WordService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = parseFloat(param.get('id'));
      this.translate(this.id);
      console.log(this.meaning);
    });
  }
  translate(id: number) {
    this.meaning = this.service.translate(id);
  }
}
