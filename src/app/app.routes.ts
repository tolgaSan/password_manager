import { Routes } from '@angular/router';
import { PasswordListComponent } from './components/password-list/password-list.component';
import { PasswordDetailComponent } from './components/password-detail/password-detail.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';


export const routes: Routes = [
    { path: 'list', component: PasswordListComponent },
    { path: 'detail/:id', component: PasswordDetailComponent },
    { path: 'create', component: PasswordFormComponent },
    { path: 'edit/:id', component: PasswordFormComponent },
];
