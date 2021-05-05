import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from '../routing/home/home.component';
import {UsersComponent} from '../routing/users/users.component';
import {UserComponent} from '../routing/users/user/user.component';
import {ServersComponent} from '../routing/servers/servers.component'
import {ServerComponent} from '../routing/servers/server/server.component'
import {EditServerComponent} from '../routing/servers/edit-server/edit-server.component'
import {PageNotFoundComponent} from '../routing/page-not-found/page-not-found.component'
import { AuthGuard } from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service'
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'users',component:UsersComponent,children:[
      {path:':id/:name',component:UserComponent},
    ]},
    {path:'servers',
   // canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    component:ServersComponent,children:[
      {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
    ]},
    // {path:'not-found',component:PageNotFoundComponent},
    {path:'not-found',component:ErrorPageComponent,data:{message:'Page Not Found!'}},
    {path:'**',redirectTo:'/not-found'},
  ]; 

  @NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    // imports:[RouterModule.forRoot(appRoutes,{useHash:true})],
    exports:[RouterModule]
  })
  export class RouteRoutingModule{}