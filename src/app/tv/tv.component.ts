import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvshows:any[]=[];
  movie_posterUrl:string=this._TrendingService.baseUrl;
  currentPageNumber:number=1;
  pages:number[]=[1,2,3,4];

  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.AllTvShows(this.currentPageNumber);
  }

  AllTvShows(pagenumber:number){
    this._TrendingService.getAll('tv',pagenumber).subscribe({
      next:(data)=>{
        this.tvshows=data.results;
      }
    })
  }

  next(){
    if(this.currentPageNumber == 100){
      this.AllTvShows(100)
    }
    else{
      this.AllTvShows(++this.currentPageNumber);
    }
    scrollTo(0,0);
  }

  prev(){
    if(this.currentPageNumber == 1)
    this.AllTvShows(1)
    else
    this.AllTvShows(--this.currentPageNumber);
    scrollTo(0,0);
  }

}
