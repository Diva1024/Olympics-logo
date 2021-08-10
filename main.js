canvas=
document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth= 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth= 5;
ctx.arc(250, 210, 50, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 5;
ctx.arc(380, 210, 50, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth= 5;
ctx.arc(520, 210, 50, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth= 5;
ctx.arc(320, 260, 50, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth= 5;
ctx.arc(450, 260, 50, 0, 2 *Math.PI);
ctx.stroke();