import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dating-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'dating-app';
}
