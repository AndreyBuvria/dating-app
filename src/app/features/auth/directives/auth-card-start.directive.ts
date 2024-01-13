import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[authCardStart]'
})
export class AuthCardStartDirective {
  public readonly templateRef = inject(TemplateRef);
}
