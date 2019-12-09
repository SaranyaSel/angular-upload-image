import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup,FormControl, Validators }from  "@angular/forms";
import { ErrorMsg } from "../errorMsg";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: [ './upload.component.css' ]
})
export class UploadComponent implements OnInit {
  name = 'Angular';
  uploadForm:FormGroup;
  imageUrl: any;
  imageSanitize: any;
  private sanitization: DomSanitizer;
  editFile: boolean = true;
  removeUpload: boolean = false;
  errorMsg = new ErrorMsg();
  uploadImgStyle: string = "";
  displayStyle: string = "";
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef;
  constructor(private cd: ChangeDetectorRef){

  }
  ngOnInit(){
    this.uploadForm=new FormGroup({
      uploadImg:new FormControl('',[Validators.required])
    });
  }
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    // console.log(event.target.files[0].type);
    if (event.target.files && event.target.files[0]) {
      if (
        event.target.files[0].type === "image/jpeg" ||
        event.target.files[0].type === "image/jpg" ||
        event.target.files[0].type === "image/png"
      ) {
        reader.readAsDataURL(file);

        // When file uploads set it to file formcontrol
        reader.onload = () => {
          this.imageUrl = reader.result;
          this.imageSanitize = this.sanitization.bypassSecurityTrustUrl(
            "`url(" + this.imageUrl + ")`"
          );
          // console.log(this.imageUrl,this.imageSanitize);
          this.uploadForm.patchValue({
            uploadImg: this.imageUrl
          });
          this.displayStyle = "displayblock";
          this.editFile = false;
          this.removeUpload = true;
        };
        // ChangeDetectorRef since file is loading outside the zone
        this.cd.markForCheck();
        this.uploadImgStyle = "success-msg";
      } else {
        this.errorMsg.valid = false;
        this.errorMsg.message +=
          "\nupload picture required.Format accepted is .jpg,.png,.jpeg.";
        this.errorMsg.type = "UploadtImg";
        this.uploadImgStyle = "error-msg";
      }
    }
  }
}
