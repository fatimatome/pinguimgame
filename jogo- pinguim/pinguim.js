var coinWeight = 10;
var coinHeight = 10; 
var coinX;
var coinY;
var score = 0;

function coin_def(){
	coinWeight = 10;
	coinHeight = 10; 
	
}


function up(){
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2); 
	document.getElementById('character').setAttribute('class',myclass[n]);
	var a = document.getElementById('character').style.top; 
	
	if (a==0) a="100";
	b=parseInt(a)-10; 
	
	document.getElementById('character').style.top=b+"px"; 
	
}

function down() {
	var myclass = new Array('front-right','front-stand','front-left'); 
	var n= Math.round(Math.random()*2); 
	document.getElementById('character').setAttribute('class',myclass[n]); 
	var a = document.getElementById('character').style.top; 
	
	if (a==0) a="100";
		
	b=parseInt(a)+10;
	document.getElementById('character').style.top=b+"px"; 

	
}

function left() {
	var myclass = new Array('left-right','left-stand','left-left'); 
	var n= Math.round(Math.random()*2); 
	document.getElementById('character').setAttribute('class',myclass[n]); 
	var a = document.getElementById('character').style.left; 
	
	if (a==0) a="100";
	b=parseInt(a)-10;
	document.getElementById('character').style.left=b+"px"; 

	
}

function right() {
	var myclass = new Array('right-right','right-stand','right-left'); 
	var n= Math.round(Math.random()*2); 
	document.getElementById('character').setAttribute('class',myclass[n]); 
	var a = document.getElementById('character').style.left; 
	
	if (a==0) 
		a="100";
		
	b=parseInt(a)+10;
	document.getElementById('character').style.left=b+"px"; 

	
}

function apanharCoin(){

	var characterTop = document.getElementById('character').offsetTop;
	var characterLeft = document.getElementById('character').offsetLeft;
	
	var coinTop = document.getElementById('coin').offsetTop;
	var coinLeft = document.getElementById('coin').offsetLeft;
	
	if (characterTop >= coinTop - 20 && characterTop <= coinTop + coinHeight){
		if (characterLeft >= coinLeft - 20 && characterLeft <= coinLeft + coinWeight){
			mudarCoin();
			score++;
			document.getElementById ('alertScore').innerHTML = "Apanhaste " + score + " uma moeda.";
		}
	}
}

function mudarCoin(){ 
	coinX = Math.random() * 450; 
	coinY = Math.random()* 500; 
	
	var coin = document.getElementById ("coin");

	coin.style.left = coinY + "px";
	coin.style.top = coinX +"px";

} 

function Key(e){
if (e.keyCode===37) left();
if (e.keyCode===38) up();
if (e.keyCode===39) right();
if (e.keyCode===40) down();

apanharCoin();
}


