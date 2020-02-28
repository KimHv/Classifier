import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Prediction } from '../prediction';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-image-classfier-upload',
  templateUrl: './image-classfier-upload.component.html',
  styleUrls: ['./image-classfier-upload.component.css']
})
export class ImageClassfierUploadComponent implements OnInit {
  @ViewChild('img', { static: false }) img: ElementRef;
  predictions: Prediction[];
  model: any;
  imgSrc: string;
  loading = true;

  constructor() { }

  async ngOnInit() {
    this.model = await mobilenet.load();
    this.loading = false;
  }


  async fileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (res: any) => {
        this.imgSrc = res.target.result;
        setTimeout(async () => {
        this.predictions = await this.model.classify(this.img.nativeElement);
      });
      };
    }
  }
}
