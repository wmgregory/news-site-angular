import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<any> = new EventEmitter();

  public keyword: string = '';
  public keywords: string[] = [];

  constructor() {}

  ngOnInit() {}

  addKeyword(): void {
    const trimmed = this.keyword.trim();

    console.log(trimmed);

    if (trimmed) {
      this.keywords.push(trimmed);

      this.search.emit(this.keywords.toString());
      this.keyword = '';
    }
  }

  removeKeyword(keyword: string): void {
    this.keywords = this.keywords.filter((item) => item !== keyword);
    this.search.emit(this.keywords.toString());
  }

  clear(): void {
    this.keywords = [];
    this.search.emit('');
    this.keyword = '';
  }
}
