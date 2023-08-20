import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from 'src/app/procedure.service';
import { Procedure } from 'src/app/types/procedure';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

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
    private userService:UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
    
    get isLoggedIn(): boolean {
      return this.userService.isLogged
    }
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

  del(): void {
    const id = this.activatedRoute.snapshot.params['procedureId']
    this.procedureService.deleteProcedure(id).subscribe({
      next: () => {
        console.log('The Procedure has been deleted successfuly!');
      },
      complete: () => {
        this.router.navigate(['/procedures'])
      },
      error: (err) => {
        console.error(`Error: ${err}`)
      }
    })
  }
}
