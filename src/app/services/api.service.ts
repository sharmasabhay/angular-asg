import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../environments/environment';

const endPoint = environment.endPoint;

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	cart;

	constructor(private cookieService: CookieService, private http: HttpClient) {}	

	authenticate(credential){

		return this.http.post(endPoint+'/api/auth', credential);
	}

	userDetail(){
		return this.http.get(endPoint+'/api/loggedUser');
	}

	categoryList(){
		return this.http.get(endPoint+'/api/super/category?withCount=true');
	}
	/*getCartKey(){
		return this.cookieService.get('deliveryKey') || '';
	}

	setCartKey(key){
		var now = new Date();
    	now = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
		this.cookieService.set('deliveryKey',key,now,'/');
	}

	getCart(){
		return this.cart;
	}

	setCart(cartObject){
		this.cart = cartObject;
		this.setCartKey(cartObject._id);
	}*/

}