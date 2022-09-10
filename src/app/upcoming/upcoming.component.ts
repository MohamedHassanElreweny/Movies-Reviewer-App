import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  movies:any[]=[];
  currentPageNumber:number=1;
  pages:number[]=[1,2,3,4];
  movie_posterUrl:string=this._TrendingService.baseUrl;

  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.AllUpComingMovies(this.currentPageNumber);
  }

  AllUpComingMovies(pagenumber:number){
    this.currentPageNumber= pagenumber;
    this._TrendingService.getUpComing(pagenumber).subscribe({
      next:(data)=>{
        this.movies = data.results;
      }
    })
  }

  next(){
    if(this.currentPageNumber == 100){
      this.AllUpComingMovies(100)
    }
    else{
      this.AllUpComingMovies(++this.currentPageNumber);
    }
    scrollTo(0,0);
  }

  prev(){
    if(this.currentPageNumber == 1)
    this.AllUpComingMovies(1)
    else
    this.AllUpComingMovies(--this.currentPageNumber);
    scrollTo(0,0);
  }
}
