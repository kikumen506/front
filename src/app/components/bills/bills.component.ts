import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  constructor( private billService: BillService ) { }

  ngOnInit(): void {
    this.billService.getBills().subscribe(
      res => console.log( res ),
      err => console.log( err )
    );
  }

}
