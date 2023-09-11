import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article?: Article;
  slug!: string;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getTargetArticle(this.slug);
  }

  private getTargetArticle(slug: string) {
    this.articleService
      .getTargetArticle(slug)
      .subscribe((data) => (this.article = data['data']));
  }
}
