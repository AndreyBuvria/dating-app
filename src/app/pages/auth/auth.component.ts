import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'dating-app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {}
