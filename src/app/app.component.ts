import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppIconsService } from '@core/services';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'dat-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'dat-app';

  constructor(readonly appIconsService: AppIconsService) {
    appIconsService.loadAll();
  }
}
