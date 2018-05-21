import { RouterModule,Routes} from '@angular/router';
import {home} from '../Pages/home/home';
import {second} from '../Pages/second/second';
import {third} from '../Pages/third/third';


export const CoreModules =[
	home,
	second,
	third
	
];

const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },  
		{ path: 'home', component: home},
		{ path: 'insert', component: second},
		{ path: 'result', component: third},
		
		
	];

export const CONST_ROUTING = RouterModule.forRoot(routes);