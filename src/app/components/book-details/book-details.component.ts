import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../models/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() viewMode = false;

  @Input() currentBook: Book = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBook(this.route.snapshot.params['id']);
    }
  }

  getBook(id: string): void {
    this.bookService.get(id).subscribe({
      next: (data) => {
        this.currentBook = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentBook.title,
      description: this.currentBook.description,
      published: status
    };

    this.message = '';

    this.bookService.update(this.currentBook.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentBook.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateBook(): void {
    this.message = '';

    this.bookService
      .update(this.currentBook.id, this.currentBook)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This book was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteBook(): void {
    this.bookService.delete(this.currentBook.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/books']);
      },
      error: (e) => console.error(e)
    });
  }

}
