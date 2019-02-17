import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JokeService } from "src/app/shared/services/joke.service";
import { Observable } from "rxjs";

@Component({
  selector: "cj-joke-page",
  templateUrl: "./joke-page.component.html",
  styleUrls: ["./joke-page.component.scss"]
})
export class JokePageComponent implements OnInit {
  currentCategoryName: string;
  joke$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private jokeCategories: JokeService
  ) {}

  ngOnInit() {
    return this.route.paramMap.subscribe(res => {
      this.currentCategoryName = res.get("category_name");
      if (this.currentCategoryName) {
        this.getJoke();
      }
    });
  }

  getJoke() {
    this.joke$ = this.jokeCategories.getCurrentCategory(
      this.currentCategoryName
    );
  }

  doRandom() {
    this.getJoke();
  }
}
