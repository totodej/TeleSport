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
import { TitleComponent } from "src/app/components/title/title.component";
import { LinePieComponent } from './components/line-pie/line-pie.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartPieComponent, CardComponent, TitleComponent, LinePieComponent, LoadingComponent],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
