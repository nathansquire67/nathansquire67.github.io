function resize(){
	var width = window.innerWidth;
	var body = document.getElementsByTagName('body')[0];

	if(width < 1000){
		body.classList.add('smaller');
	}else{
		body.classList.remove('smaller');
	}
}
