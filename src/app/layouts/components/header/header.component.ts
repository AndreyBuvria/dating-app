import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotificationIconComponent } from '@shared/components/notification-icon';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NotificationIconComponent],
  selector: 'dat-app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
