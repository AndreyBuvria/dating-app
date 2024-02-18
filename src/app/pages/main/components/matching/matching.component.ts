import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dat-app-matching',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matching.component.html',
  styleUrl: './matching.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchingComponent {}
