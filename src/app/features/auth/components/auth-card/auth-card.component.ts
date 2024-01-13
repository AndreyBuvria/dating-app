import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { AuthCardEndDirective, AuthCardStartDirective } from '../../directives';

@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: 'dating-app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrl: './auth-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCardComponent {
  @Input()
  public title!: string;

  @ContentChild(AuthCardStartDirective, { read: TemplateRef<unknown> })
  protected authCardStart!: TemplateRef<unknown>;

  @ContentChild(AuthCardEndDirective, { read: TemplateRef<unknown> })
  protected authCardEnd!: TemplateRef<unknown>;
}
