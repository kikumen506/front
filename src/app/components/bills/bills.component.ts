import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bill } from 'src/app/models/bill.model';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  userFilter = '';
  page: number = 1;
  constructor( public billService: BillService ) { }

  ngOnInit(): void {
    this.getBills();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getBills() {
    this.billService.getBills().subscribe(
      res => {
        this.billService.bills = res['bills'];
      },
      err => console.log( err )
    );
  }

  deleteBill(id: string){
    if(confirm('¿Seguro que quieres eliminar el registro?')){
      this.billService.deleteBill( id ).subscribe(
        (res) => {
          this.getBills();
      }, (err) => console.error(err))
    };
    
  }

  updateBill(bill: Bill){
    this.billService.selectedBill = bill;
  }

  addBill(form: NgForm){
    if(form.value._id){
      this.billService.updateBill(form.value).subscribe(
        (res) => {
          this.getBills();
          form.reset();
        },
        (err) => console.error(err)
      )
    } else {
      this.billService.createBill(form.value).subscribe(
        res => {
          this.getBills();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

}
