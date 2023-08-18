import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-procedure-new',
  templateUrl: './procedure-new.component.html',
  styleUrls: ['./procedure-new.component.css']
})
export class ProcedureNewComponent {

  newProcedureSubmitHandler(newProcedureForm: NgForm) {
    if (newProcedureForm.invalid) {
      return
    }


  }
}
