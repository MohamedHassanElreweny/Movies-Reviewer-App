import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people:any[]=[];
  movie_posterUrl:string=this._TrendingService.baseUrl;
  currentPageNumber:number=1;
  pages:number[]=[1,2,3,4];

  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllPeople(this.currentPageNumber);
  }
  getAllPeople(pagenumber:number){
    this._TrendingService.getAllPeople(pagenumber).subscribe({
      next:(data)=>{
        this.people = data.results;
      }
    })
  }

  next(){
    if(this.currentPageNumber == 100){
      this.getAllPeople(100)
    }
    else{
      this.getAllPeople(++this.currentPageNumber);
    }
    scrollTo(0,0);
  }

  prev(){
    if(this.currentPageNumber == 1)
    this.getAllPeople(1)
    else
    this.getAllPeople(--this.currentPageNumber);
    scrollTo(0,0);
  }

}
