"use strict";

//TIC TAC TOE GAME//
window.addEventListener('DOMContentLoaded', function () {
  var tiles = Array.from(document.querySelectorAll('.tile'));
  var playerDisplay = document.querySelector('.display-player');
  var resetButton = document.querySelector('#reset');
  var announcer = document.querySelector('.announcer');
  var board = ['', '', '', '', '', '', '', '', ''];
  var currentPlayer = 'X';
  var isGameActive = true;
  var PLAYERX_WON = 'PLAYERX_WON';
  var PLAYERO_WON = 'PLAYERO_WON';
  var TIE = 'TIE';
  var winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  var isValidAction = function isValidAction(tile) {
    if (tile.innerText === 'X' || tile.innerText === 'O') {
      return false;
    }

    return true;
  };

  var updateBoard = function updateBoard(index) {
    board[index] = currentPlayer;
  };

  var changePlayer = function changePlayer() {
    playerDisplay.classList.remove("player".concat(currentPlayer));
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add("player".concat(currentPlayer));
  };

  var announce = function announce(type) {
    switch (type) {
      case PLAYERO_WON:
        announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
        break;

      case PLAYERX_WON:
        announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
        break;

      case TIE:
        announcer.innerText = 'Tie';
    }

    announcer.classList.remove('hide');
  };

  function handleResultValidation() {
    var roundWon = false;

    for (var i = 0; i <= 7; i++) {
      var winCondition = winningConditions[i];
      var a = board[winCondition[0]];
      var b = board[winCondition[1]];
      var c = board[winCondition[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }

    if (!board.includes("")) announce(TIE);
  }

  var userAction = function userAction(tile, index) {
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add("player".concat(currentPlayer));
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  tiles.forEach(function (tile, index) {
    tile.addEventListener('click', function () {
      return userAction(tile, index);
    });
  });

  var resetBoard = function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
      changePlayer();
    }

    tiles.forEach(function (tile) {
      tile.innerText = '';
      tile.classList.remove('playerX');
      tile.classList.remove('playerO');
    });
  };

  resetButton.addEventListener('click', resetBoard);
});
//# sourceMappingURL=script-tictactoe.dev.js.map
