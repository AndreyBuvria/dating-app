import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { AuthComponent } from './auth.component';
import { routes } from './auth.routes';
import { LoginComponent, SignupComponent } from './components';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: []
})
export class AuthModule {}
