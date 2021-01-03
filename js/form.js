class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 0);
        this.title.style('font-size', '100px');
        this.title.style('color', 'lightblue');
        this.input.position(650, 350);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('background', 'lightgreen');
        this.button.position(650, 450);
        this.button.style('width', '210px');
        this.button.style('height', '40px');
        this.button.style('background', 'royalblue');
        this.reset.position(660, 650);
        this.reset.style('width', '200px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(500, 250);
            this.greeting.style('color', 'lightgreen');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}