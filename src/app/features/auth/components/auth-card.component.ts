import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input
} from '@angular/core';
import { AuthCardEndDirective, AuthCardStartDirective } from '../directives';

@Component({
  selector: 'dating-app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrl: './auth-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCardComponent {
  @Input()
  public title!: string;

  @ContentChild(AuthCardStartDirective)
  protected authCardStart!: AuthCardStartDirective;

  @ContentChild(AuthCardEndDirective)
  protected authCardEnd!: AuthCardEndDirective;
}
