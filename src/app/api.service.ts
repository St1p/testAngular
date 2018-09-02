import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class ApiService {

    private api_url = 'https://api.themoviedb.org';
    private key = 'deeb215d09411cd7b73f317458b2037d';
    private language = 'language=en-US';
    private url;

    constructor(private http: Http ) {}
    getFilms(page) {
        this.url =  this.api_url+"/3/movie/top_rated?api_key="+this.key+"&"+this.language+"&page="+page;
        return this.http
            .get(this.url)
            .map((response: Response)=> {
            console.log(response.json());
                return  response.json();
            })
            .catch(this.handleError);
    }
    getFilmDetails(film_id) {
        this.url =  this.api_url+"/3/movie/"+film_id+"?api_key="+this.key+"&"+this.language+"&append_to_response=credits";
        return this.http
            .get(this.url)
            .map((response: Response)=> {
                console.log(response.json());
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
