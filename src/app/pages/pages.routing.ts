import { Routes } from '@angular/router';

import { HomeComponent } from './default-component/home/home.component';
import { UserComponent } from './default-component/user/user.component';
import { TablesComponent } from './default-component/tables/tables.component';
import { TypographyComponent } from './default-component/typography/typography.component';
import { IconsComponent } from './default-component/icons/icons.component';
import { MapsComponent } from './default-component/maps/maps.component';
import { NotificationsComponent } from './default-component/notifications/notifications.component';
import { UpgradeComponent } from './default-component/upgrade/upgrade.component';

export const PagesRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'user/test', component: UserComponent },
    { path: 'table', component: TablesComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
];
