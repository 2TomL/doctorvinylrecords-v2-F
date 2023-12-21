import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Category } from 'src/app/interface/Category';
import { Format } from 'src/app/interface/Format';
import { Status } from 'src/app/interface/Status';
import { vinyl } from 'src/app/interface/vinyl';
import { HttpClient } from '@angular/common/http';
import { Track } from 'src/app/interface/Track';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  
  vinyl: vinyl = {
    imageFile: null,
    vinylId: 0,
    artist: '',
    title: '',
    catalogNr: '',
    label: '',
    country: '',
    ytLink:'',
    category : Category.DEEP_HOUSE,
    released: 0,
    format: Format.TWELVE_INCH,
    bestSeller: false,
    trackList: [],
    price: 0,
    status: Status.IN_STOCK,
  };

  //file: File | null = null;

  constructor (private httpClient: HttpClient, private router: Router, private productService: ProductService){

  }

  file: File = new File([], '');
  addFile(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      
    }
  }
  

  addProduct() {
    this.addimageTodb()
    const url = 'http://localhost:8080/api/vinyl/add'
    const token = localStorage.getItem('token');
  
    if (token) {

      console.log(this.vinyl);
      

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      this.httpClient.post(url, this.vinyl, { headers }).subscribe({
        next: response => {
          console.log('Saved okay', response)
          this.router.navigate(['/add-product']);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.error);
        }
      });
      

      this.vinyl = {
        imageFile: null,
        vinylId: 0,
        artist: '',
        title: '',
        catalogNr: '',
        label: '',
        country: '',
        ytLink:'',
        category : Category.DEEP_HOUSE,
        released: 0,
        format: Format.TWELVE_INCH,
        bestSeller: false,
        trackList: [],
        price: 0,
        status: Status.IN_STOCK,
      };
    }
  }
  addimageTodb() {
    const img: FormData = new FormData();
          this.vinyl.imageFile = this.vinyl.vinylId + '.png';
          img.append('file', this.file, this.vinyl.imageFile);
    const url = 'http://localhost:8080/api/vinyl/addimage'
    const token = localStorage.getItem('token');  
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
 
    this.httpClient.post(url, img, {headers: headers, responseType: 'text' });
  }
    
  }
    // addTrack(): void {
    //   const newTrack: Track = { trackId: '', title: '', videoLink: '' };
    //   this.Vinyl.trackList.push(newTrack);
    // }
    // removeTrack(index: number) {
    //   this.Vinyl.trackList.splice(index, 1);
    // }
