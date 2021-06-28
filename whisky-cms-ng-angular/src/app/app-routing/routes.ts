import { Routes } from '@angular/router';
import { BlogpostListComponent } from '../blogpost-list/blogpost-list.component';
import { BlogpostComponent } from '../blogpost/blogpost.component';
export const routes: Routes = [
  { path: '',  component: BlogpostListComponent },
  { path: 'blog-posts/:id', component: BlogpostComponent },

  ];