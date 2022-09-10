import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {


  movies:any[]=[];
  currentPageNumber:number=1;
  pages:number[]=[1,2,3,4];
  movie_posterUrl:string=this._TrendingService.baseUrl;
  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.AllMovies(this.currentPageNumber);
  }

  AllMovies(pagenumber:number){
    this.currentPageNumber= pagenumber;
    this._TrendingService.getAll('movie',pagenumber).subscribe({
      next:(data)=>{
        this.movies = data.results;
      }
    })
  }

  next(){
    if(this.currentPageNumber == 100){
      this.AllMovies(100)
    }
    else{
      this.AllMovies(++this.currentPageNumber);
    }
    scrollTo(0,0);
  }

  prev(){
    if(this.currentPageNumber == 1)
    this.AllMovies(1)
    else
    this.AllMovies(--this.currentPageNumber);
    scrollTo(0,0);
  }

}
