import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from './default-component/lbd/lbd.module';
import { NguiMapModule } from '@ngui/map';

import { PagesRoutes } from './pages.routing';

import { HomeComponent } from './default-component/home/home.component';
import { UserComponent } from './default-component/user/user.component';
import { TablesComponent } from './default-component/tables/tables.component';
import { TypographyComponent } from './default-component/typography/typography.component';
import { IconsComponent } from './default-component/icons/icons.component';
import { MapsComponent } from './default-component/maps/maps.component';
import { NotificationsComponent } from './default-component/notifications/notifications.component';
import { UpgradeComponent } from './default-component/upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})

export class PagesModule { }
