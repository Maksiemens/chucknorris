import { Component, OnInit } from "@angular/core";
import { JokeService } from "src/app/shared/services/joke.service";
import { Observable } from "rxjs";

@Component({
  selector: "cj-default-joke-page",
  templateUrl: "./default-joke-page.component.html",
  styleUrls: ["./default-joke-page.component.scss"]
})
export class DefaultJokePageComponent implements OnInit {
  joke$: Observable<any>;

  constructor(private jokeCategories: JokeService) {}

  ngOnInit() {
    this.getRandomJokeWithoutCategory();
  }

  doRandom() {
    this.getRandomJokeWithoutCategory();
  }

  getRandomJokeWithoutCategory() {
    this.joke$ = this.jokeCategories.getRandomJoke();
  }
}
