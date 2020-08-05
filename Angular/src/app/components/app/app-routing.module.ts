import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../views/home/home.component';
import { PostsComponent } from '../../views/posts/posts.component';
import { UsersComponent } from '../../views/users/users.component';
import { ContactUsComponent } from '../../views/contact-us/contact-us.component';
import { Notfound404Component } from 'src/app/views/notfound404/notfound404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '404', component: Notfound404Component},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
