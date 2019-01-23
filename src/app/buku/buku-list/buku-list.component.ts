import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Buku } from '../buku.models';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})
export class BukuListComponent implements OnInit {

@Output() dariChildKeParent: EventEmitter<Buku> = new EventEmitter();

@Input() bukuParent: Buku[];
  
constructor() { }

  ngOnInit() {
  }

deleteRow(idx: number) {
  console.log("removing row index: " + idx);
  this.bukuParent.splice(idx, 1);
}

}