import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JacksWireFrameComponent } from './jacks-wire-frame/jacks-wire-frame.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    JacksWireFrameComponent,
    HomeComponent,
    SubmitComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
