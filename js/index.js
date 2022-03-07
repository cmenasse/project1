let level = 5;
const game = new Game(20);





function displayTiles(tiles, level) {
    let html = '';
    tiles.forEach(x => html += `<div class="tile">${x}</div>`);
    document.querySelector('#grid').innerHTML = html;
    Array.from(document.querySelectorAll('.tile'))
    .filter(x => Number(x.textContent) > level)
    .forEach(x => {
        x.textContent = "";
        x.style.backgroundColor = "#181a1b";
        x.classList.add('inactive');
    });
}



let exit = 0;



    let correct = 1;
    let tiles = game.shuffle(game.tiles);

    document.querySelector('h1').innerHTML = `Level ${level}`;
    displayTiles(tiles, level);

    document.querySelectorAll('.tile:not(.inactive)')
            .forEach(x => {x.addEventListener('click', () => {
        if (Number(x.textContent) === correct) {
            x.style.backgroundColor = "#181a1b";
            x.textContent = "";
            correct++;
            console.log(correct);
        }
        else {
            exit = 1;
            Array.from(document.querySelectorAll('.tile')).forEach(x => {
                x.classList.remove('tile')
                x.textContent = "";
                let html =  `<div class="end">Game over! <br> Level ${level}</div>`
                document.querySelector('#grid').innerHTML = html;
            });
        }}, 
        {once:true});
        });  


