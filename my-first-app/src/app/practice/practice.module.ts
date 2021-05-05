import { NgModule } from '@angular/core';
import { PracticeComponent } from './practice.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CockpitComponent } from './data-binding/cockpit/cockpit.component';
import { ServerElementComponent } from './data-binding/server-element/server-element.component';
import { DirectiveComponent } from './directive/directive.component';
import { BasicHighlightDirective} from './directive/basic-highlighter/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directive/structural/unless.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UsersComponent } from './routing/users/users.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { UserComponent } from './routing/users/user/user.component';
import { ServersService } from './routing/servers/servers.service';
import { RouteRoutingModule } from '../practice/routing/route-routing.module';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import {AuthService} from '../practice/routing/auth.service';
import {AuthGuard } from '../practice/routing/auth-guard.service';
import { from } from 'rxjs';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import {ServerResolver} from './routing/servers/server/server-resolver.service';
import {ObservableModule} from './observable/observable.module'
import { ObservableComponent } from './observable/observable.component';
import { ObsHomeComponent } from './observable/home/home.component';
import { ObsUserComponent } from './observable/user/user.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
    declarations: [
            PracticeComponent,
            DataBindingComponent,
            CockpitComponent,
            ServerElementComponent,
            DirectiveComponent,
            BasicHighlightDirective,
            BetterHighlightDirective,
            UnlessDirective,
            ServicesComponent,
            AccountComponent,
            NewAccountComponent,
            RoutingComponent,
            HomeComponent,
            ServersComponent,
            UsersComponent,
            EditServerComponent,
            ServerComponent,
            UserComponent,
            PageNotFoundComponent,
            ErrorPageComponent,
            ObservableComponent,
            ObsHomeComponent,
            ObsUserComponent,
            FormsComponent,
            TemplateDrivenComponent,
            ReactiveFormComponent 
       
           
                     
        ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        // RouteRoutingModule,
       ObservableModule
      ],
      providers: [
        AccountsService,
        LoggingService,
        ServersService,
        AuthGuard,
        AuthService,
        CanDeactivateGuard,
        ServerResolver
      ],
      bootstrap: [],
      exports:[
        DataBindingComponent,
        PracticeComponent,
        BasicHighlightDirective,
        ServicesComponent,
        AccountComponent,
        NewAccountComponent,
        RoutingComponent,
        HomeComponent,
        ServersComponent,
        UsersComponent,
        EditServerComponent,
        ServerComponent,
        UserComponent
      ]
     
})
export class PracticeModule{

}