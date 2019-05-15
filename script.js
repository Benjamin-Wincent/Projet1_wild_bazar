function myMove() {
	const elem = document.getElementById("myAnimation");
	let pos = 0;
	let id = setInterval(frame, 1);
	function frame() {
		if (pos == 2500) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.right = pos + 'px';
		}
	}
}



  