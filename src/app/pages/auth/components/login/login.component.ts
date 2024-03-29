import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthCardComponent } from '@features/auth/components';
import { AuthCardEndDirective, AuthCardStartDirective } from '@features/auth/directives';
import { CustomInputComponent } from '@shared/components';

@Component({
  standalone: true,
  imports: [
    AuthCardComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    AuthCardStartDirective,
    AuthCardEndDirective,
    MatButtonModule
  ],
  selector: 'dat-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  protected isPasswordHidden: boolean = true;
  form!: FormGroup;

  public get email() {
    return this.form.get('email') as FormControl;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
  }
}
