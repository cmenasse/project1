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
    let html =  `<div class="end">Game over! <br> Level ${level}</div>`;
    html += `<button onClick="window.location.reload();">Retry</button>`;
    document.querySelector('#grid').innerHTML = html;
}
 
function handleClick(x) {
    if (Number(x.textContent) === correct) {
        x.classList.add('inactive');
        if (window.navigator && window.navigator.vibrate)
            navigator.vibrate(100);
        if (correct === 1)
            hideTiles('.tile:not(.inactive)');
        if (correct++ === level)
            startLevel(++level);
    }
    else 
        endGame(level);
}

function clickEvent() {
    document.querySelectorAll('.tile:not(.inactive)')
    .forEach(x => x.addEventListener('click', () => handleClick(x), {once:true}));
}

function startLevel(level) {
    correct = 1;
    let tiles = game.shuffle(game.tiles);
    dipslayLevel(level);
    displayTiles(tiles, level);
    clickEvent();
}

const game = new Game(20);
let level  = 1;
let correct = 1;
startLevel(level);


