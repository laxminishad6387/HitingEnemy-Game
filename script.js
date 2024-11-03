const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
canvas.width=innerWidth;
canvas.height=innerHeight;
// create player
class Player{
      constructor(x,y,radius,color)
      {
            this.x=x;
            this.y=y;
            this.radius=radius;
            this.color=color;
      }
      draw()
      {
            ctx.beginPath();
            ctx.arc(this.x, this.y,this.radius,0,Math.PI*2,false);
            ctx.fillStyle=this.color;
            ctx.fill();
      }
}

// create Projectile
class Projectile{
      constructor(x, y,radius,color,velocity)
      {
            this.x=x;
            this.y=y;
            this.color=color;
            this.radius=radius;
            this.velocity=velocity;
      }
      draw()
      {
            ctx.beginPath();
            ctx.arc(this.x, this.y,this.radius,0,Math.PI*2,false);
            ctx.fillStyle=this.color;
            ctx.fill();
      }
      update()
      {       
            this.draw();
            this.x=this.x+this.velocity.x;
            this.y=this.y+this.velocity.y;
      }
}
// create enemy
class Enemy{
      constructor(x, y,radius,color,velocity)
      {
            this.x=x;
            this.y=y;
            this.color=color;
            this.radius=radius;
            this.velocity=velocity;
      }
      draw()
      {
            ctx.beginPath();
            ctx.arc(this.x, this.y,this.radius,0,Math.PI*2,false);
            ctx.fillStyle=this.color;
            ctx.fill();
      }
      update()
      {       
            this.draw();
            this.x=this.x+this.velocity.x;
            this.y=this.y+this.velocity.y;
      }
}
let x=canvas.width/2;
let y=canvas.height/2;
const ProjectileArray=[];
const players=new Player(x,y,30,'white');

function animate()
{
      requestAnimationFrame(animate);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      players.draw();
     ProjectileArray.forEach(projectile=>
     {
      projectile.update();
     }
     )
}
addEventListener('click',function(event){
    const angle=Math.atan2(event.clientX-canvas.width/2,event.clientY-canvas.height/2);
    const  velocity={
      x:Math.cos(angle),
      y:Math.sin(angle)
    }
    
    ProjectileArray.push(new Projectile(canvas.width/2,canvas.height/2,5,'red',velocity))
})
animate();