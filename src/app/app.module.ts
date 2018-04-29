import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NewsService } from './services/news.service';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './shared/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
