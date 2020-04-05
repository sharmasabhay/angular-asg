import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	cart;

	constructor(private cookieService: CookieService) {}	

	getCartKey(){
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
	}

}