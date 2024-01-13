import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthCardComponent } from '@features/auth/components';
import { CustomInputComponent } from '@shared/components';

@Component({
  standalone: true,
  imports: [AuthCardComponent, CustomInputComponent, ReactiveFormsModule],
  selector: 'dating-app-login',
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
