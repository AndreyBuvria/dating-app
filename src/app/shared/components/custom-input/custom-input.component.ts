import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomInputTypesEnum } from './custom-input-types.enum';

@Component({
  selector: 'dating-app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent {
  @Input({ required: true })
  public type!: CustomInputTypesEnum;

  protected readonly INPUT_TYPES = CustomInputTypesEnum;
  protected isPasswordHidden: boolean = false;
}
