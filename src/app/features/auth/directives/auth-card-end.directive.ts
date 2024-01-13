import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[authCardEnd]'
})
export class AuthCardEndDirective {
  public readonly templateRef = inject(TemplateRef);
}
