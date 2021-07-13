let inputDirection = { x: 0, y: 0 };
let speed = 3;
let foodPositionSpeed = 1;
let lastFoodTime = 0;
let lastPaintTime = 0;
let score = 0;

let snake = {

    x: 7,
    y: 8
};

let food = {

    x: 1,
    y: 7
};

//From this main function the game will be looped. 
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) return;
    lastPaintTime = ctime;
    // console.log(ctime);
    gameEngine();

}

//main() is repeatedly executing gameEngine().
function gameEngine() {
    //if the snake has eaten the food 
    if (snake.x === food.x && snake.y === food.y) {
        let a = 1;
        let b = 10;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        score += 10;
        scoreBox.innerHTML = +score;
    }

    // moving the snake 
    snake.x += inputDirection.x;
    snake.y += inputDirection.y;
    if (snake.x > 10) {
        snake.x = 0;
        snake.y = snake.y;
    } else if (snake.x < 0) {
        snake.x = 10;
        snake.y = snake.y;
    } else if (snake.y < 0) {
        snake.x = snake.x;
        snake.y = 10;
    } else if (snake.y > 10) {
        snake.x = snake.x;
        snake.y = 0;
    }

    //displaying the snake
    board.innerHTML = "";
    snakeElement = document.createElement('div');
    snakeLeftEye = document.createElement('div');
    snakeRightEye = document.createElement('div');
    snakeElement.style.gridRowStart = snake.y;
    snakeElement.style.gridColumnStart = snake.x;
    snakeElement.classList.add('snake');
    snakeLeftEye.classList.add('leftEye');
    snakeRightEye.classList.add('rightEye');
    snakeElement.appendChild(snakeLeftEye);
    snakeElement.appendChild(snakeRightEye);
    board.appendChild(snakeElement);

    //displaying the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

//moving the food
function moveFood() {
    let a = 0;
    let b = 10;
    food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
}

//this will loop the PAC-MAN
window.requestAnimationFrame(main);

//moving the food
let move = window.setInterval(moveFood, 10000);


// Event Listener that will read the press on keyboard.
window.addEventListener('keydown', e => {
    // inputDirection = { x: 0, y: 1 };
    switch (e.key) {
        case "ArrowUp":

            inputDirection.x = 0;
            inputDirection.y = -1;
            break;
        case "ArrowDown":

            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        case "ArrowLeft":

            inputDirection.x = -1;
            inputDirection.y = 0;
            break;
        case "ArrowRight":

            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
        case "Enter":
            inputDirection.x = 0;
            inputDirection.y = 0;
            break;
    }

});

// Event Listener(onclick()) that will read the press on screen.
function setMovement(keys) {
    switch (keys) {
        case "ArrowUp":

            inputDirection.x = 0;
            inputDirection.y = -1;
            break;
        case "ArrowDown":

            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        case "ArrowLeft":

            inputDirection.x = -1;
            inputDirection.y = 0;
            break;
        case "ArrowRight":

            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
        case "Enter":
            inputDirection.x = 0;
            inputDirection.y = 0;
            break;
    }

}