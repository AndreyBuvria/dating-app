import { Injectable, inject } from '@angular/core';
import { IconOptions, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS_PATH } from '@core/tokens';

type IconNamespace = 'sidenav';

@Injectable({
  providedIn: 'root'
})
export class AppIconsService {
  private readonly iconsPath = inject(ICONS_PATH);

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {}

  public loadAll(): void {
    this.loadRootIcons();
    this.loadSidenavIcons();
  }

  private loadRootIcons(): void {
    this.registerIcon('user', 'user.svg');
  }

  private loadSidenavIcons(): void {
    const namespace: IconNamespace = 'sidenav';

    this.registerIcon('message', 'message.svg', namespace, 'sidenav');
  }

  private registerIcon(
    name: string,
    fileName: string,
    namespace?: IconNamespace,
    folderPath: string = ''
  ): void {
    const safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `${this.iconsPath}/${folderPath.length ? folderPath + '/' + fileName : fileName}`
    );
    const options: IconOptions = {
      withCredentials: false
    };

    if (namespace) {
      this.matIconRegistry.addSvgIconInNamespace(namespace, name, safeUrl, options);
    } else {
      this.matIconRegistry.addSvgIcon(name, safeUrl, options);
    }
  }
}
