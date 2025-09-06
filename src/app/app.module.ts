import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ChartPieComponent } from "src/app/components/chart-pie/chart-pie.component";
import { CardComponent } from './components/card/card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartPieComponent, CardComponent],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({
            // theme: {
            //     preset: Aura
            // }
        })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
