function parallax($active){
	var elements = document.querySelectorAll('.parallax');
	Array.prototype.forEach.call(elements, function(index){
		var centerContent = index.getElementsByClassName('center-content')[0];
		if($active === true){
			var height        = index.offsetHeight,
			    offsetTop     = index.offsetTop,
				toTop         = window.pageYOffset,
				windowHeight  = window.innerHeight,
				centerHeight  = centerContent.clientHeight,
				scrollTotal   = (height - centerHeight)/2,
				percentage    = (toTop - offsetTop) / windowHeight,
				translate     = scrollTotal * percentage + 'px';

			if(toTop > offsetTop && percentage <= 1){
				centerContent.style.transform = 'translate3d(0,' + translate + ',0)';
				centerContent.style.webkitTransform = 'translate3d(0,' + translate + ',0)';
			}

			else if(toTop <= offsetTop){
				centerContent.removeAttribute('style');
			}
		}
		else{
			centerContent.removeAttribute('style');
		}
	});
};