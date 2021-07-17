 var canvas=document.getElementById('animation');
  var ctx=canvas.getContext('2d');

//first circle
x=100;
y=100;
vx=3;
vy=9;
r=60;

//second circle
x2=200;
y2=200;
vx2=4;
vy2=5;
r2=55;

//third circle
x3=300;
y3=300;
vx3=8;
vy3=8;
r3=50;

//forth circle
x4=400;
y4=400;
vx4=12;
vy4=9;
r4=45;

//five circle
x5=500;
y5=500;
vx5=14;
vy5=7;
r5=40;

//six circle
x6=450;
y6=420;
vx6=10;
vy6=5;
r6=53;

function createCircle()
{ 
  ctx.clearRect(0,0, canvas.width, canvas.height);
  
  //first circle
if(x > canvas.width -r || x<r)
{ vx=-vx;
}
if(y > canvas.height -r || y<r)
{ vy=-vy;
}
  x+=vx;
  y+=vy;
 
  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fillStyle="orange";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
  //second circle
if(x2 > canvas.width- r2 || x2<r2) { vx2=-vx2; }
if(y2 > canvas.height -r2 || y2<r2)  { vy2=-vy2; }
  x2+=vx2;
  y2+=vy2;
 
  ctx.beginPath();
  ctx.arc(x2,y2,r2,0,2*Math.PI);
  ctx.fillStyle="pink";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
  //third circle
if(x3 > canvas.width- r3 || x3<r3) { vx3=-vx3; }
if(y3 > canvas.height -r3 || y3<r3)  { vy3=-vy3; }
  x3+=vx3;
  y3+=vy3;
 
  ctx.beginPath();
  ctx.arc(x3,y3,r3,0,2*Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
  //forth circle
if(x4 > canvas.width- r4 || x4<r4) { vx4=-vx4; }
if(y4 > canvas.height -r4 || y4<r4)  { vy4=-vy4; }
  x4+=vx4;
  y4+=vy4;
 
  ctx.beginPath();
  ctx.arc(x4,y4,r4,0,2*Math.PI);
  ctx.fillStyle="blue";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
  //five circle
if(x5 > canvas.width- r5 || x5<r5) { vx5=-vx5; }
if(y5 > canvas.height -r5 || y5<r5)  { vy5=-vy5; }
  x5+=vx5;
  y5+=vy5;
 
  ctx.beginPath();
  ctx.arc(x5,y5,r5,0,2*Math.PI);
  ctx.fillStyle="green";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
  //six circle
if(x6 > canvas.width- r6 || x6<r6) { vx6=-vx6; }
if(y6 > canvas.height -r6 || y6<r6)  { vy6=-vy6; }
  x6+=vx6;
  y6+=vy6;
 
  ctx.beginPath();
  ctx.arc(x6,y6,r6,0,2*Math.PI);
  ctx.fillStyle="tomato";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
window.requestAnimationFrame(createCircle);
}
createCircle();
//setInterval(createCircle, 30);