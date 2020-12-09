import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './pages/shared/navbar/navbar.module';
import { FooterModule } from './pages/shared/footer/footer.module';
import { SidebarModule } from './pages/sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
