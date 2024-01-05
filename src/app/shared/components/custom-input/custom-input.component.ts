import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  Input,
  Optional,
  SkipSelf,
  forwardRef
} from '@angular/core';
import { ControlContainer, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorClass } from '@shared/classes';
import { VALIDATION_ERRORS } from '@shared/constants';
import { CustomInputTypes } from './types/custom-input.types';

@Component({
  selector: 'dating-app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent extends ControlValueAccessorClass {
  @Input({ required: true })
  public type!: CustomInputTypes;
  @Input()
  public validationProperty: keyof typeof VALIDATION_ERRORS = 'default';
  @Input()
  public formControlName!: string;
  @Input()
  public label?: string;

  protected isPasswordHidden: boolean = false;

  private _control!: FormControl;

  protected get errorList(): string[] {
    const errorTypes = this._control?.errors;

    if (!errorTypes) {
      return [];
    }

    const errors: string[] = [];
    const validationErrors = VALIDATION_ERRORS[this.validationProperty]!;

    for (const key of Object.keys(errorTypes)) {
      const error = validationErrors[key];

      if (error) {
        errors.push(error);
      }
    }

    return errors;
  }

  protected get computedType(): CustomInputTypes {
    if (this.type === 'password') {
      return this.isPasswordHidden ? this.type : 'text';
    } else {
      return this.type;
    }
  }

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private readonly controlContainer: ControlContainer,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  public onInput(ev: any): void {
    this.onChange(ev.target.value);

    // this.changeDetectorRef.markForCheck();
  }

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this._control = this.controlContainer.control!.get(this.formControlName) as FormControl;
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn("Can't find parent FormGroup directive");
    }
  }

  private subscribeToInputChanges(): void {}
}
