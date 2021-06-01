import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog-page/blog-page.component';
import { PageNotFoundComponent } from '../app/pages/page-not-found/page-not-found.component';
import { PortfolioComponent } from './pages/portfolio-page/portfolio-page.component';
import { ResumeComponent } from './pages/resume-page/resume-page.component';

const routes: Routes = [
  // Order of routes matter
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: PageNotFoundComponent }, // Should always be the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  BlogComponent,
  ResumeComponent,
  PortfolioComponent,
  PageNotFoundComponent,
];
