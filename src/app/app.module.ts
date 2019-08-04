import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //para trabajar con formularios y reactive para modo data



import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //registrado aquí
    ReactiveFormsModule //para trabajar cuando es con aproximación por data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
