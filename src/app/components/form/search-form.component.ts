import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeDataBase } from 'src/app/anime.database';
import { Genre, SearchForm } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid' 

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm:FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private db: AnimeDataBase) { }

  ngOnInit() {
    this.searchForm = this.CreateForm();
  }

  async getSearchData() {
    const form: SearchForm = {
      q: this.searchForm.value.q,
      genre: this.searchForm.value.genre
    }
    this.gotoSearchList(form);
  }

  async setSearchData() {
    const form: SearchForm = {
      q: this.searchForm.value.q,
      genre: this.searchForm.value.genre
    }
    // save this to the database
    await this.db.addSearch(form);
    this.gotoSearchList(form);
  }

  gotoSearchList(form: SearchForm) {
    this.router.navigate([`/search/${form.genre}/${form.q}`])
  }

  private CreateForm():FormGroup {
    return this.searchForm = this.fb.group({
      q: this.fb.control('', [Validators.required]),
      genre: this.fb.control('anime', [Validators.required])
    })
  }
}
