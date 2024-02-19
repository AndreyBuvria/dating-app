import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@layouts/components/header';
import { SidenavComponent } from '@layouts/components/sidenav';

@Component({
  selector: 'dat-app-main',
  standalone: true,
  imports: [CommonModule, SidenavComponent, HeaderComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {}
