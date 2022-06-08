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
        score2++;
        dy=0
        dx=0
        setTimeout(balleaucentre,1000)
        document.getElementById("score2").innerHTML=score2
        if (score2>3){
        	victoire(2)
        }
    }
    if(x+dx>largeur-diametre){
        score1++;
        dy=0
        dx=0
        setTimeout(balleaucentre,1000)
        document.getElementById("score1").innerHTML=score1
        if (score1>3){
        	victoire(1)
        }
    }

if(x +dx < epaisseur){

	if(document.getElementById("balle").offsetTop>document.getElementById("racket1").offsetTop-diametre
		&&
		document.getElementById("balle").offsetTop<document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight){
	dx=Math.abs(dx);
couleur1("racket1")
	if(document.getElementById("balle").offsetTop
	<document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight*25/100){
		dy=dy-1
    }
    if(document.getElementById("balle").offsetTop
	>document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight*75/100){
		dy=dy+1
    }
  }
}
if (x + dx > largeur-diametre-epaisseur ) {
        if(document.getElementById("balle").offsetTop>document.getElementById("racket2").offsetTop-diametre
		&&
		document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight){
	dx=-Math.abs(dx);
couleur2("racket2")
	if (document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight*25/100){
	dy=dy-1
	}
	if(document.getElementById("balle").offsetTop
>document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight*75/100){
	dy=dy+1
	if(true){
	 dy=dy*2
     	}
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
	pas=40
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
document.getElementById("reset").addEventListener("click",init);

function init(){
	document.getElementById("racket1").style.top=(hauteur-document.getElementById("racket1").clientHeight)/2+"px"
	document.getElementById("racket2").style.top=(hauteur-document.getElementById("racket2").clientHeight)/2+"px"
	y=(hauteur-document.getElementById("balle").clientHeight)/2
	x=(largeur-document.getElementById("balle").clientWidth)/2
	dx=5
	dy=Math.random()*(dx/5)-dx/10
	interval=setInterval(deplacement,10)
	
	document.getElementById("score1").innerHTML=0
	document.getElementById("score2").innerHTML=0
	document.getElementById("victoire1").style.visibility="hidden"
	document.getElementById("victoire2").style.visibility="hidden"
	document.getElementById("reset").style.visibility="hidden"
	document.getElementById("start").style.visibility="hidden"
	document.getElementById("J1").style.visibility="hidden"
	document.getElementById("J2").style.visibility="hidden"
	score1=0
	score2=0
	
	

}

function balleaucentre() {
	y=(hauteur-document.getElementById("balle").clientHeight)/2
	x=(largeur-document.getElementById("balle").clientWidth)/2
	if (document.getElementById("balle").offsetLeft>x){
		dx=-5
	}
	if (document.getElementById("balle").offsetLeft<x){
		dx=5
	}
	dy=Math.random()-1.
	
	}



function victoire(j){
	document.getElementById("reset").style.visibility="visible"
	document.getElementById("J1").style.visibility="visible"
	document.getElementById("J2").style.visibility="visible"
	clearInterval(interval)
	if (j==1)
		document.getElementById("victoire1").style.visibility="visible";
	if (j==2)
		document.getElementById("victoire2").style.visibility="visible";


}



function couleur1(animation){
	document.getElementById("racket1").classList.add(animation)
	setTimeout(couleur,1000)
}

function couleur2(animation){
	document.getElementById("racket2").classList.add(animation)
	setTimeout(couleur,1000)
}

function couleur(){
document.getElementById("racket1").classList.remove("racket1")
	document.getElementById("racket2").classList.remove("racket2")
}

function robot2() {
	if(document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket1").clientHeight/2)
		deplacement_racket2(-40)
	if(document.getElementById("balle").offsetTop>document.getElementById("racket2").offsetTop+document.getElementById("racket1").clientHeight/2)
		deplacement_racket2(40)
}

function auto(event){
	x=parseInt(event.srcElement.id.slice(-1));
	if(1==x)
	if(document.getElementById("auto1").checked){
		intervalRobot1=setInterval(robot1,200) 
		console.log("robot1")
	}
	else{
		clearInterval(intervalRobot1)
		console.log("robotdesactive")
	}
	if(2==x)
	if(document.getElementById("auto2").checked)
		intervalRobot2=setInterval(robot2,200)
	else
		clearInterval(intervalRobot2)
}

document.getElementById("auto1").addEventListener("click",auto);
document.getElementById("auto2").addEventListener("click",auto);
document.getElementById("humain1").addEventListener("click",auto);
document.getElementById("humain2").addEventListener("click",auto);
function robot1() {
	if(document.getElementById("balle").offsetTop<document.getElementById("racket1").offsetTop+document.getElementById("racket2").clientHeight/2)
		deplacement_racket1(-40)
	if(document.getElementById("balle").offsetTop>document.getElementById("racket1").offsetTop+document.getElementById("racket2").clientHeight/2)
		deplacement_racket1(40)
}

document.getElementById("start").addEventListener("click",init);




