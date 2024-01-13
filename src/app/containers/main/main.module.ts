import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { HeaderComponent } from 'src/app/layouts/components';

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(mainRoutes), HeaderComponent]
})
export class MainModule {}
