// Default imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Routes/Components
import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { SearchListComponent } from './components/search-list.component';
import { SearchComponent } from './components/search.component';
import { ResultComponent } from './components/result.component';
import { SearchFormComponent } from './components/form/search-form.component';

// Import Angular Materials & Flexbox
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Import forms module & Moment
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';

// Import Http Client for backend request
import { HttpClientModule } from '@angular/common/http';

// Routing
import { RouterModule } from '@angular/router';

// Database
import { AnimeDataBase } from './anime.database';

// Playing LottieFiles GIF/JSON
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

//function required for player
export function playerFactory() {
  return player;
}


// Declare routes for router
const ROUTES = [
  {path:'', component: MainComponent },
  {path:'search', component: SearchComponent },
  {path:'search/list', component: SearchListComponent },
  {path:'search/:genre/:q', component: ResultComponent },
  {path:'**', redirectTo: '', pathMatch: "full" },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchListComponent,
    SearchComponent,
    ResultComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    FlexLayoutModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forRoot(ROUTES),
  ],
  
  // Providers for dexie
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-sg'}, AnimeDataBase],
  bootstrap: [AppComponent]
})
export class AppModule { }
