import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'login',

	template: `
	  Register
	   <mat-card>
	       <mat-card-header>
	          <mat-card-title>
	              <h4> Profile</h4>
	          </mat-card-title>
	       </mat-card-header>
	      <mat-card-content> 
	         <mat-list-item>Name: Tim  </mat-list-item>
          </mat-card-content> 
       </mat-card>
	 `
})

export class ProfileComponent {
          
          constructor( private apiService: ApiService ) { } 

          ngOnInit(){
               var id =
               this.apiService.getProfile(id)

          }     
	
}