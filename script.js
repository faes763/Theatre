document.querySelector('.x').onclick = cli;
document.querySelector('.xa').onclick = cli;
document.querySelector('.xb').onclick = cli;
document.querySelector('.xy').onclick = cli;
function cli() {
	document.querySelector('.whyar').style.display = 'none';
	document.querySelector('.whyara').style.display = 'none';
	document.querySelector('.whyarb').style.display = 'none';
	document.querySelector('.whyarc').style.display = 'none';
	document.body.style.overflow = 'visible';
}
document.querySelector('.lyp').onclick = function() {
	document.querySelector('.whyara').style.display = 'block';
	console.trace();
	// console.log(whra)
	// if (whra == "document.querySelector.onclick") {
	// 	alert('51')
	// }
	window.scrollTo(0,1750);
	document.body.style.overflow = 'hidden';
	ok();
}
document.body.onclick = function() {
	console.log(event.target);
	let what = event.target.className;
	// let emaf = document.querySelector('.whyara'),document.querySelector('.whyarb');
	if (what === "em" || what === "ema" || what ===	"all" || what === "oll" || what === "okqa") {
		document.querySelector('.whyar').style.display = 'none';
		document.querySelector('.whyara').style.display = 'none';
		document.querySelector('.whyarb').style.display = 'none';
		document.querySelector('.whyarc').style.display = 'none';
		document.body.style.overflow = 'visible';
	}
}

document.querySelector('.lypa').onclick = function() {
	document.querySelector('.whyar').style.display = 'block';
	window.scrollTo(0,1750);
	document.body.style.overflow = 'hidden';
	// alert('51');
}
document.querySelector('.lypas').onclick = function() {
	// alert('51');
	document.querySelector('.whyarc').style.display = 'block';
	window.scrollTo(0,1750);
	document.body.style.overflow = 'hidden';
}
document.querySelector('.lypak').onclick = function() {
	// alert('51');
	document.querySelector('.whyarb').style.display = 'block';
	window.scrollTo(0,1750);
	document.body.style.overflow = 'hidden';
}

// let width = document.body.clientWidth;
// if (width != width) {
// 	alert('51');
// }
// console.log(width);
// let i = 1;
// while (width < width) {
// 	alert('512')
// }

// function ok() {
// 	if()
// }