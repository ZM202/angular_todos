import {Injectable} from "@angular/core";
import{HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  constructor(private _http: HttpClient) {
  }
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=020e2b9f2aac46989bfe5c47a52efadd"

  healthNews(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
}
