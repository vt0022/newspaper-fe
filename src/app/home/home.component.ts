import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  category!: string | '';
  lastestArticle?: Article;
  articleList: Article[] | any[] = [];
  throttle = 300;
  distance = 0;
  page = 0;
  size = 10;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.page = 0; // Reset page or else it will lead to out of page when navigating to other category
      this.category = param.get('category') || '';
      this.lastestArticle = new Article();
      if (this.router.url === '/newspaper/home') {
        this.articleService
          .getArticleList(this.page, this.size)
          .subscribe((data) => (this.articleList = data['data'])); // Fetch first 10 articles
        this.getLastestArticleOverall();
      } else {
        this.articleService
          .getArticleByCategory(this.category, this.page, this.size)
          .subscribe((data) => (this.articleList = data['data']));
        this.getLastestArticleByCategory();
      }
    });
  }

  onScroll(): void {
    // Increment the page
    this.page++;
    // Fetch more articles
    this.getArticleList();
  }

  private getArticleList() {
    if (this.router.url === '/newspaper/home') {
      // Match home
      this.articleService
        .getArticleList(this.page, this.size)
        .subscribe((data) => this.articleList.push(...data['data'])); // Add new data
    } else {
      this.articleService
        .getArticleByCategory(this.category, this.page, this.size)
        .subscribe((data) => this.articleList.push(...data['data']));
    }
  }

  getLastestArticleOverall() {
    this.articleService
      .getArticleList(this.page, this.size)
      .subscribe((data) => {
        this.lastestArticle = data['data'][0];
        this.articleList.shift(); // Remove lastest article
      });
  }

  getLastestArticleByCategory() {
    this.articleService
      .getArticleByCategory(this.category, this.page, this.size)
      .subscribe((data) => {
        this.lastestArticle = data['data'][0];
        this.articleList.shift();
      });
  }
}
