import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './components/starComponent/starComponent.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-pipes';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    StarComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
