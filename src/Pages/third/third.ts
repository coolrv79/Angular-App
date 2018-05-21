import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";
@Component({
selector:'home',
templateUrl:'third.html',	
})
export class third{
param:any;
	constructor(private router: Router,private route: ActivatedRoute,private http:Http){
		this.route.params.subscribe(paramsroute => {
		this.param=paramsroute;
			console.log(paramsroute);
		});
		
	}
	
	backtofirst(){
	this.router.navigate(['/home']);
	}
	
	
}