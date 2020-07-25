import { Component, OnInit } from "@angular/core";

import { cloneDeep } from "lodash";

@Component({
  selector: "pk-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  tiles: any[];

  openedTile: any;

  canClick = true;

  constructor() {}

  ngOnInit() {
    this.initTiles();
  }

  openTile(tile: any) {
    if (this.canClick) {
      tile.isOpened = true;

      if (this.openedTile) {
        if (this.openedTile.image == tile.image) {
          this.openedTile.isMatched = true;
          tile.isMatched = true;
          this.openedTile = null;
        } else {
          this.canClick = false;
          setTimeout(() => {
            this.openedTile.isOpened = false;
            tile.isOpened = false;
            this.openedTile = null;
            this.canClick = true;
          }, 1200);
        }
      } else {
        this.openedTile = tile;
      }
    }
  }

  private initTiles() {
    this.tiles = Array(8)
      .fill(1)
      .map((n, i) => {
        return {
          image: `assets/images/1 (${i + 1}).png`,
          isOpened: false,
          isMatched: false,
        };
      });

    this.tiles.push(...cloneDeep(this.tiles));

    this.tiles = this.shuffleTiles(this.tiles);

    console.log(this.tiles);
  }

  private shuffleTiles(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

interface Tile {
  image: string;
  isOpened: boolean;
  isMatched: boolean;
}
