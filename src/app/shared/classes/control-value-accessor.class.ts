import { ControlValueAccessor } from '@angular/forms';

export abstract class ControlValueAccessorClass implements ControlValueAccessor {
  protected onChange!: (value: string) => void;
  protected onTouched!: () => void;

  public writeValue(obj: any): void {}

  public registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {}
}
