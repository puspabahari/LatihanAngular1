import { Component, OnInit, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { Buku } from '../buku.models';
import { EventEmitter } from '@angular/core';
import { BukusService } from '../bukus.service';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css'],
  providers: [BukusService]
})
export class BukuAddComponent implements OnInit {

  @ViewChild('inputJumlah') inputJumlah: ElementRef;
  
  @Output() bukuAdded = new EventEmitter<Buku>();

  @Input() bukuChild: Buku;

  @Input() bukuEditParent: Buku;

  inputInfo = new Buku ();
  constructor(private bukuService: BukusService) { }

  ngOnInit() {
  }
  tambahBuku(inputNamaBuku : HTMLInputElement) {
    console.log(this.inputInfo);
    console.log(inputNamaBuku.value);
    this.bukuAdded.emit(this.bukuService.convertBuku(this.inputInfo));
    this.inputInfo = new Buku();
  }
}
