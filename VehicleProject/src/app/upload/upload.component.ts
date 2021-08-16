import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  documentform:FormGroup;
  public progress!: number;
  public message!: string;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { 
    this.documentform = new FormGroup({
      aadhar:new FormControl(),
      pan:new FormControl(),
      salary:new FormControl(),
      photo:new FormControl(),
  })
}
  ngOnInit() {
  }
  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let filesToUpload : File[] = files;
    const formData = new FormData();
    
  Array.from(filesToUpload).map((file, index) => {
    return formData.append('file'+index, file, file.name);});
   
    //const filename =file.name;
    this.http.post('http://localhost:23810/api/document', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
        if (event.total) {  
          const total: number = event.total;  
          this.progress = Math.round(100 * event.loaded / total);
        }
        else  {
          this.message = 'Upload success.';
          alert("uploaded");
        //  debugger;
          //console.log(filename);
          //this.onUploadFinished.emit(event.body);
        }
      }
      });
  }
  /*
  public uploadFile = (files?:any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    debugger;
    const filename =fileToUpload.name;
    this.http.post('//localhost:5000/api/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        
        if (event.type === HttpEventType.Response) {
          this.messageupload = 'Upload success.';
          debugger;
          this.onUploadFinished.emit(event.body);
          alert("uploaded");
          debugger;
          console.log(filename);
        }
      });
  }
}*/
  
}