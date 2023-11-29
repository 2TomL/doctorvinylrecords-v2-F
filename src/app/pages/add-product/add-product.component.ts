import { Component } from '@angular/core';
import { Category } from 'src/app/interface/Category';
import { Format } from 'src/app/interface/Format';
import { Status } from 'src/app/interface/Status';
import { vinyl } from 'src/app/interface/vinyl';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  Vinyl: vinyl = {
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

  addFile(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
}
