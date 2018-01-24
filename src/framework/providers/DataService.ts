import { Injectable, Component, Inject } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

 
@Injectable()
export class DataService {   
        constructor(private afDatabase: AngularFireDatabase) {
    
        }

    GetNavigations() {
        return this.afDatabase.list('/Navigations').valueChanges();
    }
 
    GetData(objPage: any) {
        return this.afDatabase.list('/Data/' + objPage).valueChanges();
    }

}