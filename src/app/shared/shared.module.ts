import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components';
import { MaterialModule } from './modules';

@NgModule({
  declarations: [CustomInputComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, MaterialModule, CustomInputComponent, ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
