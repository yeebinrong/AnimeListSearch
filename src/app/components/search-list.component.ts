import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeDataBase } from '../anime.database';
import { SearchForm } from '../models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  searchForms: SearchForm[] = []
  constructor(private router: Router, private db : AnimeDataBase) { }

  ngOnInit() {
    this.db.getSearch()
      .then (data => {
      this.searchForms = data;
      })
  }
}
