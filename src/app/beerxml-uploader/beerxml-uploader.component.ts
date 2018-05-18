import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-beerxml-uploader',
  templateUrl: './beerxml-uploader.component.html',
  styleUrls: ['./beerxml-uploader.component.css']
})


export class BeerxmlUploaderComponent implements OnInit {
  //public URL="http://127.0.0.1"
  public uploader:FileUploader = new FileUploader({url: URL});
  constructor() {

  }

  ngOnInit() {
  }

  public fileOver(e:any):void {
    console.log(e);
  }

}
