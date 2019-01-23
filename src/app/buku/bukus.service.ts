import { Injectable } from '@angular/core';
import { Buku } from './buku.models';

@Injectable({
  providedIn: 'root'
})
export class BukusService {

  constructor() { }

  convertBuku(bukuInfo: Buku): Buku {
    bukuInfo.isbn = bukuInfo.isbn.toUpperCase()+' -edited';
    bukuInfo.namabuku = bukuInfo.namabuku.toUpperCase()+' -edited';
    return bukuInfo
  }

}
