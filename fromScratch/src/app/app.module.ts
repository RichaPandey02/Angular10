import { SwitchcaseComponent } from './../components/switchcase/switchcase.component';
import { ConditionalsComponent } from './../components/conditionals/conditionals.component';
import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from 'src/components/user-list/user-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConditionalsComponent,
    SwitchcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
