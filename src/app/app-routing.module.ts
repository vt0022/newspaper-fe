import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'newspaper/home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'newspaper/:slug', component: ArticleComponent },
  {
    path: 'newspaper/category/:category',
    component: HomeComponent,
  },
  { path: '**', redirectTo: 'newspaper/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
