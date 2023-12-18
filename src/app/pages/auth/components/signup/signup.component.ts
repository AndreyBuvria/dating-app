import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dating-app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {}
