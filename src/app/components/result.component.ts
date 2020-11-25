import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JikanService } from '../jikan.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  genre = ''
  q = ''
  data;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private jikan: JikanService) { }

  ngOnInit(): void {
    this.genre = this.activatedRoute.snapshot.params.genre;
    this.q = this.activatedRoute.snapshot.params.q;
    this.jikan.getData(this.genre, this.q)
      .then (d => {
        this.data = d['results'];
        console.info(this.data);
      })
  }



}
