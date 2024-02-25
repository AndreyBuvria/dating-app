import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '@features/user/components/avatar';
import { SIDENAV_TABS } from '@layouts/data';
import { ACTIVE_MAIN_ROUTE } from '@layouts/tokens';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MainRoutesEnum } from '@pages/main/enums';

@UntilDestroy()
@Component({
  selector: 'dat-app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    AvatarComponent,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input({ required: true })
  public opened!: boolean;

  protected readonly tabs = SIDENAV_TABS;

  protected activeRouteTab!: MainRoutesEnum;

  private readonly activeRouteTab$ = inject(ACTIVE_MAIN_ROUTE);

  constructor(public readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.activeRouteTab$.pipe(untilDestroyed(this)).subscribe((tab) => (this.activeRouteTab = tab));
  }
}
