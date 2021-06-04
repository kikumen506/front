import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  // deleteBill(id: string){
  //   if(confirm('¿Seguro que quieres borrarlo?')){
  //     this.userService.deleteUser(id).subscribe(
  //       (res) => {
  //         this.getUsers();
  //     }, (err) => console.error(err))
  //   };
    
  // }

  // editUser(user:User){
  //   this.userService.selectedUser = user;
  // }

  addBill(form: NgForm){
    if(form.value._id){
      // this.billService.updateBill(form.value).subscribe(
      //   (res) => {
      //     this.getBills();
      //     form.reset();
      //   },
      //   (err) => console.error(err)
      // )
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
