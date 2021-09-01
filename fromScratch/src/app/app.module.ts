import { SimpleFormComponent } from './../components/simple-form/simple-form.component';
import { SwitchcaseComponent } from './../components/switchcase/switchcase.component';
import { ConditionalsComponent } from './../components/conditionals/conditionals.component';
import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from 'src/components/user-list/user-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConditionalsComponent,
    SwitchcaseComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
