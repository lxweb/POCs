import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { ContentFilterComponent } from './components/content-filter/content-filter.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { UsersComponent } from './views/users/users.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { Notfound404Component } from './views/notfound404/notfound404.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    ContentFilterComponent,
    PostFormComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    ContactUsComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
