/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImageClassifierWebcamComponent } from './image-classifier-webcam.component';

describe('ImageClassifierWebcamComponent', () => {
  let component: ImageClassifierWebcamComponent;
  let fixture: ComponentFixture<ImageClassifierWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassifierWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassifierWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
