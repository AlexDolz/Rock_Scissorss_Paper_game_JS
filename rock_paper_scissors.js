const startBtn = document.querySelector('#start');
let rock = document.querySelector('#rock');
let scissors = document.querySelector('#scissors');
let paper = document.querySelector('#paper');
const resultContainer = document.querySelector('.result_container');
const cupMoveImg = document.querySelector('#cup_move');
const playerMoveImg = document.querySelector('#player_move');
const gif = document.querySelector('.gif_hide');
const imgResult = document.querySelector('#result_img');
const gifImgContainer = document.querySelector('.gif_img_container');
const audioLose = document.querySelector('#lose_audio');
const audioWin = document.querySelector('#win_audio');
const audioDraw = document.querySelector('#draw_audio');

rock.classList.remove('rock_active');
scissors.classList.remove('scissors_active');
paper.classList.remove('paper_active');
let currentMove;

rock.addEventListener('click', () => {
  currentMove = 0;
  rock.classList.add('rock_active');
  scissors.classList.remove('scissors_active');
  paper.classList.remove('paper_active');
  gif.classList.remove('gif_hide');
  if (imgResult.src !== '') {
    imgResult.remove('img_result');
    gifImgContainer.append(gif);
  }
});

scissors.addEventListener('click', () => {
  currentMove = 1;
  scissors.classList.add('scissors_active');
  rock.classList.remove('rock_active');
  paper.classList.remove('paper_active');
  gif.classList.remove('gif_hide');
  if (imgResult.src !== '') {
    imgResult.remove('img_result');
    gifImgContainer.append(gif);
  }
});

paper.addEventListener('click', () => {
  currentMove = 2;
  paper.classList.add('paper_active');
  rock.classList.remove('rock_active');
  scissors.classList.remove('scissors_active');
  gif.classList.remove('gif_hide');
  if (imgResult.src !== '') {
    imgResult.remove('img_result');
    gifImgContainer.append(gif);
  }
});

function start() {
  let cupMove = Math.floor(Math.random() * 3);
  let userMove = currentMove;

  if (cupMove === 0 && userMove === 1) {
    cupMoveImg.src = `${rock.src}`;
    playerMoveImg.src = `${scissors.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioLose.play();
    gif.remove('gif_hide');
    imgResult.src = `img/lose2.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 0 && userMove === 2) {
    cupMoveImg.src = `${rock.src}`;
    playerMoveImg.src = `${paper.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioWin.play();
    gif.remove('gif_hide');
    imgResult.src = `img/win.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 1 && userMove === 0) {
    cupMoveImg.src = `${scissors.src}`;
    playerMoveImg.src = `${rock.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioWin.play();
    gif.remove('gif_hide');
    imgResult.src = `img/win.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 1 && userMove === 2) {
    cupMoveImg.src = `${scissors.src}`;
    playerMoveImg.src = `${paper.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioLose.play();
    gif.remove('gif_hide');
    imgResult.src = `img/lose2.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 2 && userMove === 0) {
    cupMoveImg.src = `${paper.src}`;
    playerMoveImg.src = `${rock.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioLose.play();
    gif.remove('gif_hide');
    imgResult.src = `img/lose2.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 2 && userMove === 1) {
    cupMoveImg.src = `${paper.src}`;
    playerMoveImg.src = `${scissors.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioWin.play();
    gif.remove('gif_hide');
    imgResult.src = `img/win.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 0 && userMove === 0) {
    cupMoveImg.src = `${rock.src}`;
    playerMoveImg.src = `${rock.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioDraw.play();
    gif.remove('gif_hide');
    imgResult.src = `img/draw.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 1 && userMove === 1) {
    cupMoveImg.src = `${scissors.src}`;
    playerMoveImg.src = `${scissors.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioDraw.play();
    gif.remove('gif_hide');
    imgResult.src = `img/draw.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  } else if (cupMove === 2 && userMove === 2) {
    cupMoveImg.src = `${paper.src}`;
    playerMoveImg.src = `${paper.src}`;
    playerMoveImg.style.transform = 'scaleX(-1)';
    audioDraw.play();
    gif.remove('gif_hide');
    imgResult.src = `img/draw.png`;
    gifImgContainer.append(imgResult);
    imgResult.style.opacity = '1';
  }
}

startBtn.addEventListener('click', () => start());
