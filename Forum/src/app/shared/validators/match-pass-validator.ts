//created manually

import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordCtrlOne: string, passwordCtrlTwo: string): ValidatorFn {


    return (control) => {
        const group = control as FormGroup
        const pass1 = group.get(passwordCtrlOne)
        const pass2 = group.get(passwordCtrlTwo)
        return pass1?.value===pass2?.value ? null:{matchPasswordsValidator:true}
    }
}