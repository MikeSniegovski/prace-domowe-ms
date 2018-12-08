class Game {
  constructor() {
    this.gameContainer = document.getElementById("game");
    this.cross = new Cross();

    this.gameContainer.addEventListener("mousemove", event => {
      this.cross.update(event.offsetX, event.offsetY);
    });
    this.enemies = [
      new Triangle2(),
      new Enemy(),
      new Enemy(),
      new Triangle(),
      new Triangle()
    ];

    this.addEnemy();
    this.gameContainer.addEventListener("click", event => {
      this.cross.update(event.offsetX, event.offsetY);

      for (let enemy of this.enemies) {
        if (
          event.offsetX - 5 <= enemy.x &&
          enemy.x <= event.offsetX + 5 &&
          event.offsetY - 5 <= enemy.y &&
          enemy.y <= event.offsetY + 5
        ) {
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
          enemy.enemyElement.remove();
          this.addEnemy();
        } else {
          console.log("miss");
        }
      }
    });
  }
  addEnemy() {
    this.enemies.forEach(enemy => {
      this.gameContainer.appendChild(enemy.enemyElement);
    });
  }
}

class Cross {
  constructor(x = 100, y = 100) {
    this.crossElement = document.getElementById("cross");
    this.x = x;
    this.y = y;
  }

  update(x, y) {
    this.x = x;
    this.y = y;

    this.crossElement.style.left = this.x + "px";
    this.crossElement.style.top = this.y + "px";
  }
}

class Enemy {
  constructor() {
    this.x = Math.floor(Math.random() * 199);
    this.y = Math.floor(Math.random() * 199);

    const element = document.createElement("div");
    element.classList.add("enemy");
    element.style.left = this.x + "px";
    element.style.top = this.y + "px";

    this.enemyElement = element;
  }
}

class Triangle extends Enemy {
  constructor() {
    super();
    this.enemyElement.classList.add("blue");
  }
}

class Triangle2 extends Enemy {
  constructor() {
    super();
    this.enemyElement.classList.add("yellow");
    this.move();
  }
  move() {
    setInterval(() => {
      this.x = Math.floor(Math.random() * 199);
      this.y = Math.floor(Math.random() * 199);
      this.enemyElement.style.left = this.x + "px";
      this.enemyElement.style.top = this.y + "px";
    }, 1500);
  }
}
const game = new Game();
