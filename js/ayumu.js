class Game {
    constructor(n) {
        //this.tiles = [...Array(n).keys()];
        this.tiles = Array.from(Array(n), (e,i)=>i+1)
        //this.suffledTiles = this.shuffle(tiles);
        //this.correctTiles = [...Array(n).keys()];
        //this.clickedTiles = [];
      };
      shuffle(arr) {
        let currentIndex = arr.length;
          while (currentIndex) {
            let randomIndex = Math.floor(Math.random() * currentIndex--);
            [arr[currentIndex], arr[randomIndex]] = 
            [arr[randomIndex], arr[currentIndex]];
        }
        return (arr);
      }
};

