x=650;
y=365;
dx=5;
dy=5;
score1=0
score2=0

largeur=document.getElementById("terrain").clientWidth
hauteur=document.getElementById("terrain").clientHeight
diametre=document.getElementById("balle").clientHeight
epaisseur=document.getElementById("racket1").clientWidth+document.getElementById("racket1").offsetLeft



function deplacement(){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"
    if (x + dx < 0 ){
        dx = -dx;
        score2++;
        document.getElementById("score2").innerHTML=score2
    }
    if(x+dx>largeur-diametre){
    	dx=-dx;
        score1++;
        document.getElementById("score1").innerHTML=score1
    }
if(x +dx < epaisseur){

	if(document.getElementById("balle").offsetTop>document.getElementById("racket1").offsetTop-diametre
		&&
		document.getElementById("balle").offsetTop<document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight){
	dx=-dx;
    }
}
if (x + dx > largeur-diametre-epaisseur ) {
        if(document.getElementById("balle").offsetTop>document.getElementById("racket2").offsetTop-diametre
		&&
		document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight){
	dx=-dx;
	if(true){
	 dy=dy*2
     	}
     }  
 }

if (y + dy > hauteur-diametre || y + dy<0){
	dy =-dy;
}
x += dx;
y += dy;
}


function deplacement_racket1(u){
	u += document.getElementById("racket1").offsetTop
	if (u>300)
		u=300
	if (u<0)
		u=0	
	document.getElementById("racket1").style.top=u+"px"	
}

function deplacement_racket2(u){
	u += document.getElementById("racket2").offsetTop
	if (u>300)
		u=300
	if (u<0)
		u=0	
	document.getElementById("racket2").style.top=u+"px"	
}

function touchePressee(e){
	pas=25
	if (e.key == "z")
		deplacement_racket1(-pas)
	if (e.key == "s")
		deplacement_racket1(pas)
	if (e.key == "ArrowUp")
		deplacement_racket2(-pas)
	if (e.key == "ArrowDown")
		deplacement_racket2(pas)
}
document.addEventListener('keydown',touchePressee);

function init(){
	document.getElementById("racket1").style.top=(hauteur-document.getElementById("racket1").clientHeight)/2+"px"
	document.getElementById("racket2").style.top=(hauteur-document.getElementById("racket2").clientHeight)/2+"px"
	y=(hauteur-document.getElementById("balle").clientHeight)/2
	x=(largeur-document.getElementById("balle").clientWidth)/2
	dx=5
	dy=Math.random()*(dx/5)-dx/10
	setInterval(deplacement,10)
	document.getElementById("score1").innerHTML=0
	document.getElementById("score2").innerHTML=0
}

init();






