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


function endGame(finalLevel) {
    level = 1;
    play("audio/erro.mp3");
    let html =  `<div class="end">Game over! <br> Level ${finalLevel}</div>`;
    let audio = "play('audio/thevoice.mp3')";
    let resume = "startLevel(level)";
    html += `<button class="retry" onClick=${audio};${resume};>Retry</button>`;
    document.querySelector('#grid').innerHTML = html;
}
 
function handleClick(x) {
    if (Number(x.textContent) === correct) {
        x.classList.add('inactive');
        play();
        if (window.navigator && window.navigator.vibrate)
            navigator.vibrate(80);
        if (correct === 1)
            hideTiles('.tile:not(.inactive)');
        if (correct++ === level)
            {
                play("audio/level.mp3");
                startLevel(++level);
            }
    }
    else 
        endGame(level);
}

function clickEvent() {
    document.querySelectorAll('.tile:not(.inactive)')
    .forEach(x => x.addEventListener('click', () => handleClick(x), {once:true}));
}

function play(link) {
    let audio = new Audio(link);
    audio.volume = ".3"; 
    audio.play();
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


