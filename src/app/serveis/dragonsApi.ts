import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DragonsApiService {
    constructor(private http: HttpClient) { }   

    requestOptions = this.createHeader();

    getDragons(): Observable<any> {
        return this.http.get("https://www.dnd5eapi.co/api/monsters",  this.requestOptions);
    }

    getImatges(link:string): Observable<any> {
        return this.http.get("https://www.dnd5eapi.co" + link,  this.requestOptions);
    }

    private createHeader(){

        const header = {
            "Access-Control-Allow-Origin":"*",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Headers":"Origin, Content-Type, Accept, Authorization"
        }

        return {headers: new HttpHeaders(header)}
    }

}