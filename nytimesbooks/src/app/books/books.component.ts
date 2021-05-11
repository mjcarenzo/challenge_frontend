import { Component, OnInit } from '@angular/core';
import { HandleBooksApiService } from '../handle-books-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  
  listOfCategories:any = [];
  constructor(private service: HandleBooksApiService) {}

  ngOnInit(): void {
    this.loadListOfCategories();
    
  }

  loadListOfCategories(){
    this.service.getBooks().subscribe(response => this.listOfCategories = response.results.slice(0,10));
  }

}
