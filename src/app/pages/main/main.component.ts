import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarComponent } from '@layouts/components/bottom-bar';
import { HeaderComponent } from '@layouts/components/header';
import { SidenavComponent } from '@layouts/containers/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'dat-app-main',
  standalone: true,
  imports: [CommonModule, SidenavComponent, HeaderComponent, RouterOutlet, BottomBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  protected isMobile!: boolean;

  constructor(breakpointObserver: BreakpointObserver, changeDetectionRef: ChangeDetectorRef) {
    breakpointObserver
      .observe('(max-width: 768px)')
      .pipe(untilDestroyed(this))
      .subscribe((query) => {
        this.isMobile = query.matches;

        changeDetectionRef.markForCheck();
      });
  }
}
