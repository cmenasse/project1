function dipslayLevel(level) {
    document.querySelector('h1').innerHTML = `Level ${level}`;
}

function displayTiles(numbers, level) {
    let html = '';
    numbers.forEach(x => html += `<div class="tile">${x}</div>`);
    document.querySelector('#grid').innerHTML = html;
    Array.from(document.querySelectorAll('.tile'))
    .filter(x => Number(x.textContent) > level)
    .forEach(x => x.classList.add('inactive'));
}

function hideTiles(className) {
    document.querySelectorAll(className).forEach(x => x.style.fontSize = 0);
}

function endGame(level) {
    let html =  `<div class="end">Game over! <br> Level ${level}</div>`
    document.querySelector('#grid').innerHTML = html;
}
 
function clickEvent(correct) {
    document.querySelectorAll('.tile:not(.inactive)')
    .forEach(x => {x.addEventListener('click', () => {
        if (Number(x.textContent) === correct) {
            x.classList.add('inactive');
            hideTiles('.tile:not(.inactive)');
            if (correct++ === level)
                startLevel(++level);
    
        }
        else 
            endGame(level); 
        }, 
        {once:true});
        }); 
}

function startLevel(level) {

    let tiles = game.shuffle(game.tiles);
    let correct = 1;
    dipslayLevel(level);
    displayTiles(tiles, level)
    clickEvent(correct);
}

const game = new Game(20);
let level  = 1;
startLevel(level);





/*
    document.querySelectorAll('.tile:not(.inactive)')
            .forEach(x => {x.addEventListener('click', () => {
        if (Number(x.textContent) === correct) {
            x.style.backgroundColor = "#181a1b";
            x.textContent = "";
            if (correct == level) {
                level++;
                dipslayLevel(level);
            }
            
            else {
                correct++
                console.log("correct", correct);
                console.log("level", level);
            }
            hideTiles('.tile:not(.inactive)');
            console.log("tst", correct);
            console.log("final", level)
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

*/