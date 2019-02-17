import { Component, OnInit } from "@angular/core";
import { JokeService } from "../services/joke.service";
import { Observable } from "rxjs";

@Component({
  selector: "cj-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public categories$: Observable<any>;
  public showMore: boolean;

  constructor(private jokeCategories: JokeService) {}

  ngOnInit() {
    this.categories$ = this.jokeCategories.getListCategories();
    this.showMore = false;
  }

  getMore() {
    this.showMore = true;
  }
}
