function addLoadEvent(func) {
	var oldOnLoad = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnLoad();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function preparePlaceHolder() {
	if (!document.createElement) {return false;};
	if (!document.createTextNode) {return false;};
	if (!document.getElementById) {return false;};
	if (!document.getElementById("imagegallery")) {return false;};
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "../images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var textdesc = document.createTextNode("Choose an image");
	description.appendChild(textdesc);
	// document.getElementsByTagName("body")[0].appendChild(placeholder);
	// document.getElementsByTagName("body")[0].appendChild(description);
	// document.body.appendChild(placeholder);
	// document.body.appendChild(description);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) {return false;};
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if (!document.getElementById("description")) {return false;};
	if (whichpic.getAttribute("title")) {
		var text = whichpic.getAttribute("title");
	} else {
		var text = ""
	};
	var description = document.getElementById("description");
	if (description.firstChild.nodeType==3) {
		description.firstChild.nodeValue = text;
	};
	return false;
}

function prepareGallery() {
	if (!document.getElementsByTagName) {return false;};
	if (!document.getElementById) {return false;};
	if (!document.getElementById("imagegallery")) {return false;};
	var gallery = document.getElementById("imagegallery");
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this);
		}
		links[i].keypress = links[i].onclick;
	};
}
addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);