import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[authCardEnd]'
})
export class AuthCardEndDirective {
  public readonly templateRef = inject(TemplateRef);
}
