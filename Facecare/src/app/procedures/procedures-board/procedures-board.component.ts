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
  isLoading: Boolean = true
  
  constructor(private procedureService: ProcedureService) { }
  // todo  userservice
  ngOnInit(): void {
    this.procedureService.getProcedures().subscribe({
      next: (procedures) => {
        this.proceduresList = procedures
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`)
        //todo no records to show
      }
    })

  }

}
