import { ControlValueAccessor } from '@angular/forms';

export abstract class ControlValueAccessorClass implements ControlValueAccessor {
  protected onChange!: (value: string) => void;
  protected onTouch!: () => void;

  public abstract writeValue(value: any): void;

  public registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {}
}
