import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { CarrosService } from './carros.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpClientModule,CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
