import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from 'src/app/procedure.service';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.css']
})
export class ProcedureDetailsComponent implements OnInit{
  //todo inject private userService: UserService when ready
  constructor(
    private procedureService: ProcedureService,
    private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['procedureId']

  console.log(id);
  
}
}
