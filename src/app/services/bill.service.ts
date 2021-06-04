import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Bill } from '../models/bill.model';


@Injectable({
    providedIn: 'root'
})

export class BillService {

    bills: Bill[];
    selectedBill: Bill = {
        fecha:'',
        hora:'',
        consumo:'',
        precio:'',
        coste:'',
    };

    constructor( private http: HttpClient ){
        
    }
    
    getBills(){
        return this.http.get( environment.URI_API );
    };

    createBill(bill: Bill){
        return this.http.post( environment.URI_API, bill)
    }

    updateBill(){

    }

    deleteBill(){

    }
}