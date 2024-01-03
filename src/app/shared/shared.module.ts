import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomInputComponent } from './components';
import { MaterialModule } from './modules';

@NgModule({
  declarations: [CustomInputComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, CustomInputComponent]
})
export class SharedModule {}
