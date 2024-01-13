import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(mainRoutes)]
})
export class MainModule {}
