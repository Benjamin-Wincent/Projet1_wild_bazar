function myMove() {
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos == 2500) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.right = pos + 'px';
		}
	}
}



  