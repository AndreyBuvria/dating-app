import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dating-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  protected isPasswordHidden: boolean = true;
}
