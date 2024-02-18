import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'dat-app-notification-icon',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './notification-icon.component.html',
  styleUrl: './notification-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationIconComponent {}
