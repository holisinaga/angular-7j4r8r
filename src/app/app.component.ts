import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Nalom A. Sinaga';
  
  item = [{
  nama : 'Kelengkeng',
  harga : 10000
  },
  {
  nama : 'Jeruk',
  harga : 15000
  }];

  itemArr = [1,2,3,4];

  show : boolean = true;

  user = {
    nama : 'Nalom Aholiab Sinaga'
  };
}
