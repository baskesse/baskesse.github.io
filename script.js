function deplacement_balle(x,y) {
	document.getElementById("balle").style.left=x+"px"
	document.getElementById("balle").style.left=y+"px"
}

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
