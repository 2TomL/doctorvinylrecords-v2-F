import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Category } from 'src/app/interface/Category';
import { Format } from 'src/app/interface/Format';
import { Status } from 'src/app/interface/Status';
import { vinyl } from 'src/app/interface/vinyl';
import { HttpClient } from '@angular/common/http';
import { Track } from 'src/app/interface/Track';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  Vinyl: vinyl = {
    imageFile: null,
    vinylId: 0,
    artist: '',
    title: '',
    catalogNr: '',
    label: '',
    country: '',
    category: Category.DEEP_HOUSE,
    released: 0,
    format: Format.TWELVE_INCH,
    bestSeller: false,
    trackList: [],
    price: 0,
    status: Status.IN_STOCK,
  };

  file: File | null = null;

  constructor (private httpClient: HttpClient){

  }
  addFile(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
  addProduct() {
    const url = 'http://localhost:8080//api/auth/vinyl'
      // Make a POST request to the register endpoint
      this.httpClient.post(url,  this.Vinyl ).subscribe({
        next:response => {console.log('Saved okay')},
        error: (error: HttpErrorResponse) => {console.log(error.error)}
        })
    }
    // addTrack(): void {
    //   const newTrack: Track = { trackId: '', title: '', videoLink: '' };
    //   this.Vinyl.trackList.push(newTrack);
    // }
    // removeTrack(index: number) {
    //   this.Vinyl.trackList.splice(index, 1);
    // }
}
