import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseApi } from "../core/base-api.service";

@Injectable({
  providedIn: "root"
})
export class JokeService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getListCategories(): Observable<any> {
    return this.http.get(`${this.getBaseUrl()}jokes/categories`);
  }

  getCurrentCategory(category): Observable<any> {
    return this.http.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
  }

  getIftaReport(category): Observable<any> {
    const params = new HttpParams().set("category", category);
    return this.http.get(
      `${this.getBaseUrl()}jokes/random?category=${category}`,
      {
        params
      }
    );
  }

  getRandomJoke(): Observable<any> {
    return this.http.get(`${this.getBaseUrl()}jokes/random`);
  }
}
