import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConvertPipe} from './customPipes/currencyConverter.pipe'

import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/tutorial.reducer';
import { ReadComponent } from '../app/read/read.component';
import { CreateComponent } from '../app/create/create.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    ReadComponent,
    CreateComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
