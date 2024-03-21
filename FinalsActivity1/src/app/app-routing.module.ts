import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { BooksListComponent } from './componets/books-list/books-list.component';
import { AddBookComponent } from './componets/add-book/add-book.component';
import { BookDetailComponent } from './componets/book-detail/book-detail.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDetailComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }