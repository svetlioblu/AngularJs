import { Component, OnInit } from '@angular/core';
import { ProcedureService } from 'src/app/procedure.service';
import { Procedure } from 'src/app/types/Procedure';

@Component({
  selector: 'app-procedures-board',
  templateUrl: './procedures-board.component.html',
  styleUrls: ['./procedures-board.component.css']
})
export class ProceduresBoardComponent implements OnInit {
  proceduresList: Procedure[] = []

  constructor(private procedureService: ProcedureService) { }
  // to do isLoading, userservice
  ngOnInit(): void {
    this.procedureService.getProcedures().subscribe({
      next: (procedures) => {
        console.log(procedures);
      },
      error: (err) => {
        console.error(`Error: ${err}`)
      }
    })
  }

}
