import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SharedModule } from 'src/app/shared';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(mainRoutes), SharedModule, LayoutsModule]
})
export class MainModule {}
