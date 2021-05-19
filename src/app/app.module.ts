import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PortfolioComponent } from './portfolio-page/portfolio-page.component';
import { ResumeComponent } from './resume-page/resume-page.component';
import { MainComponent } from './main-page/main-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavigationComponent } from './top-navbar/top-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentSidenavComponent } from './sidenav/sidenav.component';
import { ComponentNavComponent } from './sidenav/sidenav-items/sidenav-items.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageContentComponent } from './main-page/page-content/page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ResumeComponent,
    MainComponent,
    NavigationComponent,
    ComponentSidenavComponent,
    ComponentNavComponent,
    FooterComponent,
    routingComponents,
    PageNotFoundComponent,
    PageContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
