import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id:number = 0;
  mediatype:string='';
  currentShow:any={};
  movie_posterUrl:string=this._TrendingService.baseUrl;

  constructor(private _ActivatedRoute:ActivatedRoute , private _TrendingService:TrendingService) {
   this.id = this._ActivatedRoute.snapshot.params?.['id'];
   this.mediatype = this._ActivatedRoute.snapshot.params?.['mediatype'];
   }

  ngOnInit(): void {
    this.getShow();
  }

  getShow(){
    this._TrendingService.getByID(this.id,this.mediatype).subscribe({
      next:(data)=>{
        this.currentShow = data;
        console.log(data);

      }
    })
  }

}
