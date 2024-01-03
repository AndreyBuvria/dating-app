import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
