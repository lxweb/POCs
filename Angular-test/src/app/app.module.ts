import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { ContentFilterComponent } from './components/content-filter/content-filter.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    ContentFilterComponent,
    PostFormComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
