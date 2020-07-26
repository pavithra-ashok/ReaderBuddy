import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from '../entry-form/entry-form.component';
import { ReviewsComponent } from '../reviews/reviews.component';

@NgModule({
   declarations: [
      AppComponent,
      EntryFormComponent,
      ReviewsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
