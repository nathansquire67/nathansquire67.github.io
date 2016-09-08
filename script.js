function onLoad(){
	resize();
	reWrite('initial');
}
function resize(){
	var width = window.innerWidth;
	var body = document.getElementsByTagName('body')[0];

	if(width < 1100){
		body.classList.add('smaller');
		console.log("smaller");
	}else{
		body.classList.remove('smaller');
		console.log("larger");
	}
}

function reWrite(option){
	var sampleText = document.getElementsByClassName('home')[0].getElementsByTagName('p')[0];
	switch (option) {
		case 'about':
			sampleText.innerHTML = "Dusty Vinyl is a small graphics and design studio specialising in creating characteristic album art, booklets, CD cases, and websites for the music industry.";
			break;
		case 'contact':
			sampleText.innerHTML = "We'd love to hear from you. Email us at dustyvinyl@gmail.com";
			break;
		default:
			sampleText.innerHTML = " ";
	}
}
