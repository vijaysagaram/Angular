import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [{
  path:'', component:UserComponent},
   {path:'contactus',component:ContactComponent},
   {path:'menu',component:MenuComponent}
   ];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
