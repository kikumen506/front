import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BillService {

    constructor( private http: HttpClient ){
        
    }
    
    getBills(){
        return this.http.get( environment.URI_API );
    };
}