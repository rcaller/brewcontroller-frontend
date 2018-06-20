import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://'+window.location.hostname+':8080/upload';

@Component({
  selector: 'app-beerxml-uploader',
  templateUrl: './beerxml-uploader.component.html',
  styleUrls: ['./beerxml-uploader.component.css']
})


export class BeerxmlUploaderComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL, autoUpload: true});
  constructor() {

  }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
  }

  public fileOver(e:any):void {
    //console.log(e);
  }

}
