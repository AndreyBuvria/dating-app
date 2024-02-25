import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dat-app-bottom-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomBarComponent {}
