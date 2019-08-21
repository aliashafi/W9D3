class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }
  
  
  bindEvents() {
    // let className = $('.grid li').attr('class');
    $('.grid li').on("click", (e) => {
      let $li = $(e.target);
      let pos  = $li.attr('class').split(",").map(el => {
        return parseInt(el);
      });
      this.makeMove($li);
      this.game.playMove(pos);
      if (this.game.isOver()) {
        this.el.append(`<p class="winner"> Congratulations Player ${this.game.winner()}!!! </p>`);
      }
    });
    
  }
    makeMove($square) {
      // debugger;
      // $square.css("background-color", "yellow")
      console.log(this.game.currentPlayer);
      if (this.game.isOver()) {
        alert("Sorry, game is over")
      }
      if (this.game.currentPlayer === 'x'){
        $square.text("X");
        $square.attr('id','player-1');
      }else{
        $square.text("O");
        $square.attr('id', 'player-2');
      }
    }
  

  setupBoard() {
    this.el.append("<ul>");
    let $ul = $("ul");
    $ul.addClass("grid")
    let x = 0
    let y = 0;
    for (let i = 0; i < 9; i ++) {
      $ul.append(`<li class = ${[y,x]}>`);
      // let next = $("ul li:last-child");
      // next.addClass(`${[y,x]}`);
      if (x === 2){
        x = 0;
        y++;
      }else{
        x++;
      }

    }
    // let $gridItems = $(".grid li");
    // $gridItems.css("background-color", "red");
    // $gridItems.css("width", "160px");
    // $gridItems.css("height", "140px");
    // $gridItems.css("list-style-type", "none");

    // $ul.css("display", "flex");
    // $ul.css("flex-wrap", "wrap");
    // $ul.css("background-color", "blue");
    // $ul.css("width", "500px");
    // $ul.css("height", "500px");
  }

}

module.exports = View;
