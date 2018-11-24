import inf_starlord from "../../assets/logo/inf-starlord.png";
import inf_black from "../../assets/logo/inf-black.png";
import inf_thor from "../../assets/logo/inf-thor.png";
import inf_strange from "../../assets/logo/inf-strange.png";

import starlord from "../../assets/hero/starlord.png";
import blackfinal from "../../assets/hero/blackfinal.png";
import thorfinal from "../../assets/hero/thorfinal.png";
import strange from "../../assets/hero/strange.png";


let myVar;

export const stopHomeFunctions = () => {
	clearInterval(myVar);
}

export const homeFunctions = () => {

	const images = [
		blackfinal,
		thorfinal,
		strange,
		starlord
	];
	const logos = [
		inf_black,
		inf_thor,
		inf_strange,
		inf_starlord
	];

	const shadows = [
		'drop-shadow(8px 8px 1px rgba(152, 0, 183, 0.35))',
		'drop-shadow(8px 8px 1px rgba(247, 38, 139, 0.35))',
		'drop-shadow(8px 8px 1px rgba(7, 110, 25, 0.35))',
		'drop-shadow(8px 8px 1px rgba(255, 0, 63, 0.35))'
	];

	const gradi = [
	    'linear-gradient(45deg, #9500b1, #47a4cf)',
	    'linear-gradient(45deg, #00d5bd, #fb268c)',
	    'linear-gradient(45deg, #00d230, #018bc3)',
	    'linear-gradient(45deg, #00d5bd, #fb268c)'
	];

	const col = [
	    '#9b30ff',
	    '#00d8bb',
	    '#09e84a',
	    '#fc1d37'
	];

	let i = 0;

	const myTimer = () => {
	    document.getElementById("disto").classList.add('distortion');
	    // document.getElementById("heroimg").setAttribute('src', 'blackfinal.png');
	    document.getElementById("inimg").classList.add('shake-opacity');
	    document.getElementById("heroimg").classList.add('shake-opacity');
	    // document.getElementById("inimg").classList.add('shake-crazy');
	    // document.getElementById("heroimg").classList.add('shake-crazy');
	    document.getElementById("inimg").classList.add('shake-constant');
	    document.getElementById("heroimg").classList.add('shake-constant');

	    const Timer1 = () => {
	        document.getElementById("inimg").classList.remove('shake-opacity');
	        document.getElementById("heroimg").classList.remove('shake-opacity');
	        // document.getElementById("inimg").classList.remove('shake-crazy');
	        // document.getElementById("heroimg").classList.remove('shake-crazy');
	        document.getElementById("inimg").classList.remove('shake-constant');
	        document.getElementById("heroimg").classList.remove('shake-constant');
	    }

	    const Timer2 = () => {
	        document.getElementById("inimg").classList.add('shake-opacity');
	        document.getElementById("heroimg").classList.add('shake-opacity');
	        // document.getElementById("inimg").classList.add('shake-crazy');
	        // document.getElementById("heroimg").classList.add('shake-crazy');
	        document.getElementById("inimg").classList.add('shake-constant');
	        document.getElementById("heroimg").classList.add('shake-constant');
	    }

	    const Timer3 = () => {
	        document.getElementById("inimg").classList.remove('shake-opacity');
	        document.getElementById("heroimg").classList.remove('shake-opacity');
	        // document.getElementById("inimg").classList.remove('shake-crazy');
	        // document.getElementById("heroimg").classList.remove('shake-crazy');
	        document.getElementById("inimg").classList.remove('shake-constant');
	        document.getElementById("heroimg").classList.remove('shake-constant');

	    }

	    const Timer4 = () => {
	        document.getElementById("inimg").classList.add('shake-opacity');
	        document.getElementById("heroimg").classList.add('shake-opacity');
	        // document.getElementById("inimg").classList.add('shake-crazy');
	        // document.getElementById("heroimg").classList.add('shake-crazy');
	        document.getElementById("inimg").classList.add('shake-constant');
	        document.getElementById("heroimg").classList.add('shake-constant');
	    }

	    const Timer = () => {
	    	document.getElementById("disto").classList.remove('distortion');
	        document.getElementById("inimg").classList.remove('shake-opacity');
	        document.getElementById("heroimg").classList.remove('shake-opacity');
	        // document.getElementById("inimg").classList.remove('shake-crazy');
	        // document.getElementById("heroimg").classList.remove('shake-crazy');
	        document.getElementById("inimg").classList.remove('shake-constant');
	        document.getElementById("heroimg").classList.remove('shake-constant');
	    	clearInterval(myVar);
	        myVar = setInterval(myTimer, 8000);
	    }
	    const sTimer = () => {
	        var numi = i%4;
	        document.getElementsByClassName('c'+numi)[0].classList.remove('activec');
	        document.getElementsByClassName('c'+((numi+1)%4))[0].classList.add('activec');

	    	document.getElementById("heroimg").setAttribute('src', images[i%4]);
	    	document.getElementById("inimg").setAttribute('src', logos[i%4]);
	        document.getElementById("menu").style.background = gradi[i%4];
	        document.getElementsByClassName("box")[0].style.background = col[i%4];
	        var ele = document.getElementsByClassName("colsch");
	        for (var k=0; k<ele.length; k++){
	            ele[k].style.color = col[i%4];
	        }
	    	document.getElementById("inimg").style.filter = shadows[i++%4];
	    } 
	    var myTar = setTimeout(sTimer, 350);

	    var myBar1 = setTimeout(Timer1, 250);
	    var myBar2 = setTimeout(Timer2, 330);
	    var myBar3 = setTimeout(Timer3, 550);
	    var myBar4 = setTimeout(Timer4, 650);
	    var myBar = setTimeout(Timer, 1000);
	} 

	myVar = setInterval(myTimer, 8000);

	var c0 = document.getElementsByClassName('c0')[0];
	var c1 = document.getElementsByClassName('c1')[0];
	var c2 = document.getElementsByClassName('c2')[0];
	var c3 = document.getElementsByClassName('c3')[0];

	c0.addEventListener('click', function() {i = 3; myTimer();});
	c1.addEventListener('click', function() {i = 0; myTimer();});
	c2.addEventListener('click', function() {i = 1; myTimer();});
	c3.addEventListener('click', function() {i = 2; myTimer();});
}