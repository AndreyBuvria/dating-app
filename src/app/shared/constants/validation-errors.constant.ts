import { ValidationErrors } from '@angular/forms';

type ValidationErrorProperties = 'default' | 'password' | 'email';

export const VALIDATION_ERRORS: Partial<Record<ValidationErrorProperties, ValidationErrors>> = {
  default: {
    required: "Field can/'t be empty"
  }
};
