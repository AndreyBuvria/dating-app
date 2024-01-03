import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule as AuthFeatureModule } from '@features/auth/auth.module';
import { SharedModule } from '../../shared';
import { AuthComponent } from './auth.component';
import { routes } from './auth.routes';
import { LoginComponent, SignupComponent } from './components';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [SharedModule, RouterModule.forChild(routes), AuthFeatureModule],
  exports: []
})
export class AuthModule {}
