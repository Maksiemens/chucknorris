import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JokesComponent } from "./jokes.component";
import { JokePageComponent } from "./joke-page/joke-page.component";
import { DefaultJokePageComponent } from "./default-joke-page/default-joke-page.component";

const routes: Routes = [
  {
    path: "jokes",
    component: JokesComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: DefaultJokePageComponent
      },
      {
        path: ":category_name",
        component: JokePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule {}
