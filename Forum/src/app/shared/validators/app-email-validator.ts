//manually created

import { ValidatorFn } from "@angular/forms";
//[^@]{6,}@gmail\.(bg|com)$


export function appEmailValidator(domains: string[]): ValidatorFn {


    const domainStrings = domains.join('|') // ['com','bg']=>'com|bg'
    const regEx = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`)
    
    return (control) => {
        return control.value === '' || regEx.test(control.value) ? null : { appEmailValidator: true }
    }
}