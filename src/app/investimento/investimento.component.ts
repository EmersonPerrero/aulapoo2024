import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 
import { AppComponent } from './app.component';
import { InvestimentoComponent } from './investimento/investimento.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestimentoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

