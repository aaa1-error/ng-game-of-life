import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { LifeComponent } from './components/life/life.component';
import { FractalComponent } from './pages/fractal/fractal.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifeComponent,
    FractalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
