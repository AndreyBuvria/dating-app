import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Host,
  Input,
  Optional,
  SkipSelf,
  forwardRef
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ControlValueAccessorClass } from '@shared/classes';
import { Subject, debounceTime } from 'rxjs';
import { CustomInputTypes } from './types/custom-input.types';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf
  ],
  selector: 'dat-app-custom-input',
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
  public formControlName!: string;
  @Input()
  public label?: string;
  @Input()
  public debounce: number = 0;

  protected isPasswordHidden: boolean = false;
  protected initialValue: string = '';
  protected control!: FormControl;

  private _valueChanges$: Subject<any> = new Subject<any>();

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
    private readonly controlContainer: ControlContainer
  ) {
    super();
  }

  public override writeValue(value: any): void {
    this.initialValue = value;
  }

  protected onInput(ev: any): void {
    this._valueChanges$.next(ev.target.value);
  }

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer.control!.get(this.formControlName) as FormControl;

        this.subscribeToChanges();
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn("Can't find parent FormGroup directive");
    }
  }

  private subscribeToChanges(): void {
    this._valueChanges$
      .asObservable()
      .pipe(untilDestroyed(this), debounceTime(this.debounce))
      .subscribe((value: any) => {
        this.onChange(value);
      });
  }
}
