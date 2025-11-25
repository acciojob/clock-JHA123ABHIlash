//your JS code here. If required.
let p=documet.querySelector('#timer');

setInterval(function(){
	let date=new Date();
	
	p.textContent=date.toLocalTimeString();
},1000);