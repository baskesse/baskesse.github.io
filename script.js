x=650;
y=365;
dx=5;
dy=5;
function deplacement(x,y){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"
x += dx;
y += dy;
console.log(x,y)
}
setInterval(deplacement,20)

function deplacement_racket1(y){
	if (y>300)
		y=300
	if (y<0)
		y=0	
	document.getElementById("racket1").style.top=y+"px"	
}

function deplacement_racket2(y){
	if (y>300)
		y=300
	if (y<0)
		y=0	
	document.getElementById("racket2").style.top=y+"px"	
}
