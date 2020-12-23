import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo:'/list-post', pathMatch: 'full' },
  { path: 'add-post', component: AddPostComponent },
  { path: 'update-post/:id', component: UpdatePostComponent },
  { path: 'list-post', component: ListPostComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  AddPostComponent,
                                  ListPostComponent, 
                                  UpdatePostComponent,
                                  PageNotFoundComponent
                                ];
