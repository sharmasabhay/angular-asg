import { Component } from '@angular/core';
import { UtilsService } from './services/utils.service';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alcohaul';
  deviceInfo;
  categories: any[] = [];
  announcement: any[] = [];
  category;

  constructor(
    public dataService:DataService, 
    public utilsService:UtilsService, 
    public apiService:ApiService,
    public categoryService:CategoryService
  ){
      var deviceInfo = this.utilsService.getDevice();
      this.deviceInfo = deviceInfo.device;
      this.categoryList();
      this.announcementBar();
      this.getCategories();
  }

    categoryMenu(category){
        category['subcategoryMenu'] = !category['subcategoryMenu'];
        category['catMenu'] = !category['catMenu'];
    }

  categoryList(){
        var params = {};
        this.dataService.categoryList(params)
          .subscribe(
            (data) => {
                if(data.result == "true") {
                    this.categories = data.data;
                } else {
                    
                }
            }
        );
    }

    getCategories(){
      this.apiService.categoryList()
      .subscribe((data) => {
        this.categoryService.setCategories(data);
      })
    }

    announcementBar(){
        var params = {};
        this.dataService.announcementBar(params)
          .subscribe(
            (data) => {
                if(data.result == "true") {
                    this.announcement = data.data;
                } else {
                    
                }
            }
        );
    }
}
