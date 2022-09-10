import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

baseUrl:string = 'https://image.tmdb.org/t/p/original/';

constructor(private _HttpClient:HttpClient) { }

getTrending(mediaType:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=db20b76a1070137899efa109c793e291`)
}

getAll(mediaType:string,pagenumber:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=db20b76a1070137899efa109c793e291&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagenumber}&with_watch_monetization_types=flatrate`)
}

getAllPeople(pagenumber:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=db20b76a1070137899efa109c793e291&language=en-US&page=${pagenumber}`)
}

getUpComing(pagenumber:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=db20b76a1070137899efa109c793e291&language=en-US&page=${pagenumber}`);
}

getNowPlaying(pagenumber:number):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=db20b76a1070137899efa109c793e291&language=en-US&page=${pagenumber}`);
}

getByID(id:number,mediaType:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=db20b76a1070137899efa109c793e291&language=en-US`);
}

}
