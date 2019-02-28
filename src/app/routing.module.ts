import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { UsersComponent } from './Home/Users/users.component';
import { ServicesComponent } from './Home/Services/services.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent, children: [
        {path: 'users', component: UsersComponent},
        {path: 'services', component: ServicesComponent}
    ]},
    {path: '**', redirectTo: ''}
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class routerModule{

}