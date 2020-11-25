import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/rainbow_spinner.json'
  }
  buttons;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSearch() {
    this.router.navigate(['/search/list']);
  }
}
