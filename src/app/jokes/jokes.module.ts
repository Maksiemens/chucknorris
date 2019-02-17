import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JokesRoutingModule } from "./jokes-routing.module";

import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { JokesComponent } from "./jokes.component";
import { DefaultJokePageComponent } from "./default-joke-page/default-joke-page.component";
import { JokePageComponent } from "./joke-page/joke-page.component";

@NgModule({
  declarations: [
    JokesComponent,
    JokePageComponent,
    SidebarComponent,
    HeaderComponent,
    DefaultJokePageComponent
  ],
  imports: [CommonModule, JokesRoutingModule]
})
export class JokesModule {}
