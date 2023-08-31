function Car() {
    this.position = createVector(0, 0);
    this.velocity = createVector(0, 1);
    

    this.update = function () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.position.x = constrain(this.position.x, 0, width);
        this.position.y = constrain(this.position.y, 0, height);
    }

    this.show = function () {
        fill(48);
        rect(this.position.x, this.position.y, 20, 40);
    }

    this.dir = function(x, y) {
        this.velocity.x = x;
        this.velocity.y = y;
      }
}