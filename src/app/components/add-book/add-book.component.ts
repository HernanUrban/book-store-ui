import { Component } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private bookService: BookService) {}

  saveBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description
    };

    this.bookService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      description: '',
      published: false
    };
  }
}
