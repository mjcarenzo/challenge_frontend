import { Component, OnInit } from '@angular/core';
import { HandleBooksApiService } from '../handle-books-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  
  listOfBook:any = [];
  constructor(private service: HandleBooksApiService) {}

  ngOnInit(): void {

  }

  loadListOfBooks(){
    return this.service.getBooks().subscribe(response => this.listOfBook = response.results);
  }

  
}
