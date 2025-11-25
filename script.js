//your JS code here. If required.
let p=document.querySelector('#timer');

setInterval(function(){
	let date=new Date();
	
	p.textContent=date.toLocaleString();
},1000);