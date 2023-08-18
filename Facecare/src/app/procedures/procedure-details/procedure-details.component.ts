import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from 'src/app/procedure.service';
import { Procedure } from 'src/app/types/procedure';


@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.css']
})
export class ProcedureDetailsComponent implements OnInit {

  procedure: Procedure | undefined

  //? inject private userService: UserService if need to show/hide 
  constructor(
    private procedureService: ProcedureService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['procedureId']

    this.procedureService.getDetails(id).subscribe({
      next: (procedure) => {
        this.procedure = procedure
      },
      error: (err) => {
        console.error(`Error: ${err}`)
      }
    })
  }
}
