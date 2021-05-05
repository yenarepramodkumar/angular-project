import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent} from '../observable/observable.component'
import {ObsHomeComponent} from '../observable/home/home.component'
import {ObsUserComponent} from '../observable/user/user.component'

const routes: Routes = [
    {path: '', component: ObsHomeComponent},
    {path: 'user/:id', component: ObsUserComponent}
  ];
@NgModule({
    
    imports:[
       RouterModule.forRoot(routes)
    ],
    providers:[],
    exports:[
        RouterModule
    ]

})
export class ObservableModule{

}