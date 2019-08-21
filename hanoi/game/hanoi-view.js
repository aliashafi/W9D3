// const Game = require("./game.js");

class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  setUpTowers() {
    this.el.append('<ul class="tower">');
    this.el.append('<ul class="tower">');
    this.el.append('<ul class="tower">');
    let $ul = $("ul");
    // console.log($ul[0])
    // let $ul1 = $ul[0];
    for (let i = 0; i < 3; i ++) {
      $($ul[0]).append(`<li id="level-${i}">`);
    }

    $($ul).append(`<li id="bottom">`);
  }

  render() {
    let $ul = $('ul');
    $('.tower #level-1, #level-2, #level-0').on("click", (el) => {
      let $tower = $(el.target);
      let $parentTower = $tower.parent();
      let childIndex = $ul.index($parentTower)
      let $listFirstTower = $parentTower.find('li');
      let childSubIndex = $listFirstTower.index($tower);

      let towerIndex = [childIndex, childSubIndex];

      $('.tower #bottom').on("click", (e) => {
        let $newMove = $(e.target);
        let $parent = $newMove.parent();
        let parentIndex = $ul.index($parent);
        this.game.move(childIndex,parentIndex);

        let $bottom = $parent.find('#bottom');
        $bottom.before(`<li id=${$tower.attr('id')}>`);
        // $newMove.attr('id',$tower.attr('id'));
        $tower.attr('id', "" );

      });
    })
  }

}

module.exports = HanoiView;