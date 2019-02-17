import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BaseApi {
  private baseUrl = "https://api.chucknorris.io/";

  constructor(public http: HttpClient) {}

  protected getBaseUrl(url: string = ""): string {
    return this.baseUrl + url;
  }
}
