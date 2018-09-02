import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from ".././api.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  providers: [ApiService]
})
export class FilmDetailsComponent implements OnInit {
    _filmDetail: any;
    _actorsList: any;
    _topActorsList: any;
    _showActorList: boolean = false;
  constructor(private apiSerivce: ApiService, private route: ActivatedRoute) { }

    getFilmDetails(film_id): void {
        this.apiSerivce.getFilmDetails(film_id).
        subscribe(
            result => this.setData(result),
            error => console.log("Error :: " + error )
        );
    }

  ngOnInit() {
    this.getFilmDetails(this.route.snapshot.params.id);
  }
  setData(data): void {
      this._filmDetail = data;
      this._actorsList = data.credits.cast;
      this._topActorsList =  this._actorsList.slice(0, 4);
  }
  toggleActorList(): void {
        this._showActorList = !this._showActorList;
    }
}
