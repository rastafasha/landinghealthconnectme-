import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { CloudinaryVideoPipe } from './cloudinary-video.pipe';



@NgModule({
  declarations: [
    SafePipe,
    CloudinaryVideoPipe
  ],
  exports: [
    SafePipe,
    CloudinaryVideoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
