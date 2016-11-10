function onLoad(){
	resize();
	reWrite('about');
}

function resize(){
	var width = window.innerWidth;
	var body = document.getElementsByTagName('body')[0];

	if(width < 1100){
		body.classList.add('smaller');
	}else{
		body.classList.remove('smaller');
	}
}

function reWrite(option){
	var sampleText = document.getElementById('sampleText');
	var listItems = document.getElementsByClassName('home')[0].getElementsByTagName('a');
	for(i=0; i< listItems.length; i++){
		listItems[i].classList.remove('highlighted');
	}
	switch (option) {
		case 'about':
			var title = document.getElementById('about');
			title.classList.add('highlighted');
			sampleText.innerHTML = "Dusty Vinyl is a small graphics and design studio specialising in creating characteristic album art, booklets, CD cases, and websites for the music industry.";
			break;
		case 'contact':
			var title = document.getElementById('contact');
			title.classList.add('highlighted');
			sampleText.innerHTML = "We'd love to hear from you. Email us at dustyvinylgraphicsanddesign@gmail.com";
			break;
		case 'followUs':
			var title = document.getElementById('followUs');
			title.classList.add('highlighted');
			sampleText.innerHTML = "<a href='https://www.facebook.com/dustyvinylgraphicsanddesign'>facebook</a> • <a href='https://www.behance.net/nathansqui5f0b'>behance</a> • <a href='http://dustyvinylgraphicsanddesign.tumblr.com'>tumblr</a> • <a href='https://dribbble.com/nathansquire67'>dribble</a> • <a href='https://www.linkedin.com/in/nathansquire67'>linkedIn</a>";
			break;
		default:
			sampleText.innerHTML = " ";
	}
}
