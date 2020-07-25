import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "game",
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
