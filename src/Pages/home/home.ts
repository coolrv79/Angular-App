import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";
@Component({
selector:'home',
templateUrl:'home.html',	
})
export class home{
passedvalue:any;
errmsg:any;
	constructor(private router: Router,private route: ActivatedRoute,private http:Http){
		this.route.params.subscribe(paramsroute => {
			console.log(paramsroute);
		});
		this.errmsg='';
	}
	valueof(value){
		this.passedvalue=value;
	}
	secondpage(){
		if(this.passedvalue==undefined)
			this.errmsg="Plese select any value";
		else{
			this.errmsg='';
			this.router.navigate(['/insert',{value:this.passedvalue}]);
		
		}
	}
	
	
	
	
}