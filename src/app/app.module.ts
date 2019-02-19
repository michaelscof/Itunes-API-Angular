import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchformComponent } from './searchform/searchform.component';
import { from } from 'rxjs';
import { ItunesSearchComponent } from './itunes-search/itunes-search.component';
import { ItuneService } from './services/itune.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    ItunesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItuneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
