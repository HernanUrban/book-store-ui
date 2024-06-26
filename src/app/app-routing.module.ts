import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent} from "./components/book-details/book-details.component";
import { BookListComponent} from "./components/book-list/book-list.component";
import { AddBookComponent} from "./components/add-book/add-book.component";
import {VersionComponent} from "./components/version/version.component";

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent},
  { path: 'books/:id', component: BookDetailsComponent},
  { path: 'add', component: AddBookComponent},
  { path: 'version', component: VersionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
