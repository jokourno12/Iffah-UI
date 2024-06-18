import { Routes } from '@angular/router';
import { LoginComponent } from './components/nauth/login/login.component';
import { RegisterComponent } from './components/nauth/register/register.component';
import { ForgotComponent } from './components/nauth/forgot/forgot.component';
import { NotfoundComponent } from './components/nauth/notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'nauth',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot',
                component: ForgotComponent
            }
        ]
    },
    {
        path: '*',
        component: NotfoundComponent
    }
];
