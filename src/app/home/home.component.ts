import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from ".././api.service";
import { error } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit  {
    _filmsList: object;
    _totalPagesCount: number;
    _currentPage: number;


    constructor(private apiSerivce: ApiService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._currentPage = (this.route.snapshot.params.page) ? this.route.snapshot.params.page : 1;
        console.log(this._currentPage);
        this.getFilms(this._currentPage);
    }
    getFilms(page): void {
        this.apiSerivce.getFilms(page).
        subscribe(
            resultArray => this.setData(resultArray),
            error => console.log("Error :: " + error )
        );
    }
    setData(data: any): void {
        this._filmsList = data.results;
        this._totalPagesCount = data.total_pages;
    }
    showFilmDetails(id: string): void {
        this.router.navigate(['film/' + id]);
    }
    nextPage(): void {
        console.log(this._totalPagesCount);
        if (this._currentPage < this._totalPagesCount ) {
            this.redirect(++this._currentPage);
        }
    }
    previousPage(): void {
        if (this._currentPage > 1) {
            this.redirect(--this._currentPage);
        }
    }
    redirect(page: number): void {
        this.router.navigate(['/film-list/page/' + page]);
        this.getFilms(page);
    }

}
