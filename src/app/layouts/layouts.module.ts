import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './components';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule],
  exports: [HeaderComponent]
})
export class LayoutsModule {}
