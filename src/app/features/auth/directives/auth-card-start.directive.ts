import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[authCardStart]'
})
export class AuthCardStartDirective {
  public readonly templateRef = inject(TemplateRef);
}
