import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:any[]=[];
  tvshows:any[]=[];
  people:any[]=[];
  postercheck:string='';



  movie_posterUrl:string=this._TrendingService.baseUrl;


  constructor(private _AuthService:AuthService , private _TrendingService:TrendingService ,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.getTrendingMovies();
    this.getTrendingTvShows();
    this.getTrendingPeople();
  }

  getTrendingMovies(){
    this.spinner.show();
    this._TrendingService.getTrending('movie').subscribe({
      next:(data)=>{
        this.movies = data.results.filter((obj:any)=>{
          return obj.poster_path !=null;
        }).splice(1,10);
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);
      }
    })
  }
  getTrendingTvShows(){
    this._TrendingService.getTrending('tv').subscribe({
      next:(data)=>{
        this.tvshows = data.results.filter((obj:any)=>{
          return obj.poster_path !=null;
        }).splice(1,10);
      }
    })
  }
  getTrendingPeople(){
    this._TrendingService.getTrending('person').subscribe({
      next:(data)=>{
        this.people = data.results.filter((obj:any)=>{
          return obj.profile_path !=null;
        }).splice(1,10);
      }
    })
  }

// employee: { emp_id: number, emp_name: string, emp_desg: string }[] = [
//     { "emp_id": 0, "emp_name": "Saideep", "emp_desg": "Tech Lead" },
//     { "emp_id": 1, "emp_name": "Karthik", "emp_desg": "Manager" },
//     { "emp_id": 2, "emp_name": "", "emp_desg": "Senior Systems Engineer" },
//     { "emp_id": 3, "emp_name": "Revanth", "emp_desg": "Technology Analyst" },
//     { "emp_id": 4, "emp_name": "Ravi", "emp_desg": "Systems Engineer" },
// ];

//   testarr = this.employee.filter((obj)=>{
//     return obj.emp_name !="";
//   });

}
