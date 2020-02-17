function replaceText(selector){
    let newTextString="";
    let text = $(selector).text();
    [...text].forEach((char)=>{
        newTextString += '<div class="letter" id="food" style="top:'+
        Math.random()*2
        +'em ">'+char+'</div>';
    });
    $(selector).html(newTextString);
}

// https://gist.github.com/schorfES/d55f5390307f33167834
function getBoundingBox(element) {
	var
		position = element.offset(),
		width = element.outerWidth(),
		height = element.outerHeight(),
		box = {
			xMin: position.left,
			xMax: position.left + width,
			yMin: position.top,
			yMax: position.top + height
		}
	;

	// Ignore elements with overflow hidden, children will be masked and
	// can be ignored...
	if (element.css('overflow') !== 'hidden') {
		element.children().each(function() {
			var
				child = $(this),
				childBox = getBoundingBox(child)
			;

			// Merge child box into current box:
			box = {
				xMin: Math.min(box.xMin, childBox.xMin),
				xMax: Math.max(box.xMax, childBox.xMax),
				yMin: Math.min(box.yMin, childBox.yMin),
				yMax: Math.max(box.yMax, childBox.yMax)
			};
		});
	}

	return box;
}