import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	categories;

	constructor() {}	

	setCategories(categories){
		this.categories = categories;
	}

	getCategories(){
		return this.categories;
	}

}