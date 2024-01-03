import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthCardComponent } from './components/auth-card.component';
import { AuthCardEndDirective, AuthCardStartDirective } from './directives';

@NgModule({
  imports: [SharedModule],
  declarations: [
    AuthCardComponent,
    AuthCardEndDirective,
    AuthCardStartDirective
  ],
  exports: [AuthCardComponent, AuthCardEndDirective, AuthCardStartDirective]
})
export class AuthModule {}
