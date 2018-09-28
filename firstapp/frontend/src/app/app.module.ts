import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule }  from '@angular/router'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, 
MatCardModule,
MatToolbarModule,
MatInputModule,
MatListModule
} from '@angular/material'

import { AppComponent }  from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent }  from './register.component'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'

const routes = [
     { path: 'register', component: RegisterComponent },
     { path: 'login', component: LoginComponent },
     { path: 'users', component: UsersComponent },
     { path: 'profile/:id', component: ProfileComponent }
]


@NgModule({
   declarations: [
         AppComponent, 
         MessagesComponent,
         RegisterComponent,
         LoginComponent,
         UsersComponent,
         ProfileComponent
    ],

  imports:[
             BrowserModule,
             HttpModule,
             FormsModule,
             MatButtonModule,
             MatCardModule,
             MatToolbarModule,
             RouterModule.forRoot(routes),
             MatInputModule,
             BrowserAnimationsModule,
             MatListModule
          
   ],

  providers: [ ApiService,AuthService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

