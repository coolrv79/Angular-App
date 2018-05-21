import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";

@Component({
selector:'second',
templateUrl:'second.html',	
})
export class second{
param:any;
height:any;
width:any;
radius:any;
side:any;
diam:any;
finalval:any;
Eheight:any;
Ewidth:any;
errmsgflag:any;
	constructor(private router: Router,private route: ActivatedRoute,private http:Http){
		this.route.params.subscribe(paramsroute => {
			this.param=paramsroute;
			console.log(paramsroute);
		});
		this.errmsgflag=0;
		//if(this.param['value']=='Rectangle')
			}
	Thirdpage(shape){
	this.errmsgflag=0;
		if(shape=='Rectangle'){
		if(this.height==undefined || this.width==undefined)
			this.errmsgflag=1;
		this.finalval=parseInt(this.height)*parseInt(this.width);
		}
		else if(shape=='Square'){
		if(this.side==undefined)
		this.errmsgflag=1;
		this.finalval=parseInt(this.side)*parseInt(this.side);
		}
		else if(shape=='Circle'){
		console.log("this.diam",this.diam);
		if(this.diam==undefined)
		this.errmsgflag=1;
			this.finalval=3.14*(parseInt(this.diam)/2)*(parseInt(this.diam)/2);
		}
		else if(shape=='Ellipse'){
			if(this.Ewidth==undefined ||this.Eheight==undefined)
			this.errmsgflag=1;
			this.finalval=3.14*(parseInt(this.Ewidth)/2)*(parseInt(this.Eheight)/2);
		}
		console.log("in the 2nd page",this.finalval);
		console.log(this.errmsgflag);
		if(this.errmsgflag==0)
		this.router.navigate(['/result',{area:this.finalval,shape:shape}]);
	}
	
	backtofirst(){
	this.router.navigate(['/home']);
	}
	
	
	
}