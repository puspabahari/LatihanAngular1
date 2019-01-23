import { Component, OnInit } from '@angular/core';
import { Buku } from './buku.models';
 
@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  bukuList: Buku[] = [];
  constructor() { }
  bukuEdit: Buku = new Buku();

  ngOnInit() {
  }

  onBukuAdded(bukuInfo: Buku) {
    console.log(bukuInfo);
    this.bukuList.push(bukuInfo);
  }

  onBukuEdit(bukuInfo: Buku) {
    this.bukuEdit = bukuInfo;
    console.log(this.bukuEdit);
  }

}
