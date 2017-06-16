import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDelComponent } from './components/user-del/user-del.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'content', component: ContentComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'useredit/:id', component: UserEditComponent },
  { path: 'userdel/:id', component: UserDelComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
