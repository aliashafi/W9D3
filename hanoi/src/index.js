const Game = require("../game/game.js");
const HanoiView = require("../game/hanoi-view.js");

$(() => {
  const rootEl = $('.hanoi');
  const game = new Game();
  const view = new HanoiView(game, rootEl);

  view.setUpTowers();
  view.render();
});


