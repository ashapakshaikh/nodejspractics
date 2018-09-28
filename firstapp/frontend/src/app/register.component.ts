import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
	selector: 'register',

	template: `
	  Register
	   <mat-card>
	       <mat-card-header>
	          <mat-card-title>
	              <h4> Register New User</h4>
	          </mat-card-title>
	       </mat-card-header>
	      <mat-card-content> 
	       <form>
	           <mat-form-field>
	               <input [(ngModel)]="registerData.email" name="email" matInput placeholder="Email" type="email">
	           </mat-form-field>
	           <mat-form-field>
	              <input [(ngModel)]="registerData.pwd" name="pwd" matInput placeholder="Password" type="password">
	           </mat-form-field>
	           <button (click)="post()" mat-raised-button color="primary">Register </button>
           </form>
          </mat-card-content> 
       </mat-card>
	 `
})
export class RegisterComponent {
	registerData= {}
          
          constructor( private authService: AuthService ){ }

	
	post() {
	         console.log(this.registerData)
	         this.authService.registerUser(this.registerData)
	}
}