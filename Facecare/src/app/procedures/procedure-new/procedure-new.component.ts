import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcedureService } from 'src/app/procedure.service';

@Component({
  selector: 'app-procedure-new',
  templateUrl: './procedure-new.component.html',
  styleUrls: ['./procedure-new.component.css']
})
export class ProcedureNewComponent {
  constructor(private procedureService: ProcedureService, private router: Router) { }

  newProcedureSubmitHandler(newProcedureForm: NgForm) {

    if (newProcedureForm.invalid) {
      return
    }
    const { label, therapist,
      price, img,
      description } = newProcedureForm.value

    this.procedureService.createProcedure(label, description, therapist, price, img).subscribe(()=>{
      this.router.navigate(['/procedures'])
    })
   
  }
}
