addLoadEvent(getNewContent);
function getHttpObject() {
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function(){
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			} catch(e){

			}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			} catch(e) {

			}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {

			}
			return false;
		}
	};
	return new XMLHttpRequest();
}

function getNewContent() {
	var request = getHttpObject();
	if (request) {
		request.open("GET", "example.txt", true);
		request.onreadychange = function() {
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			};
		}
		request.send(null);
	} else {
		alert("Sorry, your browser doesn\'t support XMLHttpRequest");
	};
}