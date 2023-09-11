import { Component, OnInit } from '@angular/core';
import { Category } from './model/category';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MeU Solution';

  categoryList?: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService
      .getCategoryList()
      .subscribe((data) => (this.categoryList = data['data']));
  }
}
