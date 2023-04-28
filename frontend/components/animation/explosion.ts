
const explode = (ctx: CanvasRenderingContext2D) => {


    /* Fills or sets the color,gradient,pattern */
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = "50px Arial";
    ctx.fillStyle = "green";

    /* Writes the required text  */
    ctx.fillText("GFG", 500, 350)
    let particles = [];

    /* Initialize particle object  */
    class Particle {
        x: number = 0;
        y: number = 0;
        radius: number = 0;
        dx: number = 0;
        dy: number = 0;
        alpha: number = 0;
        constructor(x: number, y: number, radius: number, dx: number, dy: number) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;
            this.alpha = 1;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = 'green';

            /* Begins or reset the path for
               the arc created */
            ctx.beginPath();

            /* Some curve is created*/
            ctx.arc(this.x, this.y, this.radius,
                    0, Math.PI * 2, false);

            ctx.fill();

            /* Restore the recent canvas context*/
            ctx.restore();
        }
        update() {
            this.draw();
            this.alpha -= 0.01;
            this.x += this.dx;
            this.y += this.dy;
        }
    }

    /* Timer is set for particle push
        execution in intervals*/
    setTimeout(() => {
        for (var i = 0; i <= 150; i++) {
            let dx = (Math.random() - 0.5) * (Math.random() * 6);
            let dy = (Math.random() - 0.5) * (Math.random() * 6);
            let radius = Math.random() * 3;
            let particle = new Particle(575, 375, radius, dx, dy);

            /* Adds new items like particle*/
            particles.push(particle);
        }
        explode(ctx);
    }, 3000);

}


/* Particle explosion function */
function explode2(ctx: CanvasRenderingContext2D) {

    /* Clears the given pixels in the rectangle */
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // particles.forEach((particle, i) => {
    //         if (particle.alpha <= 0) {
    //             particles.splice(i, 1);
    //         } else particle.update()
    //     })

        /* Performs a animation after request*/
    //requestAnimationFrame(explode);
}

export default explode;
