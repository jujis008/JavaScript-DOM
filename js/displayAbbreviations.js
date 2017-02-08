function displayAbbreviations(){
	if (!document.getElementsByTagName) {return false;};
	if (!document.createElement) {return false;};
	if (!document.createTextNode) {return false;};
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) {
		return false;
	};
	var defs = [];
	for (var i = 0; i < abbreviations.length; i++) {
		if (abbreviations[i].childNodes.length<1) {continue;};
		var defination = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = defination;
	};
	var dlist = document.createElement("dl");
	for(key in defs) {
		var defination = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(defination);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length<1) {return false;};
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

function displayCitations() {
	if (!document.createElement) {return false;};
	if (!document.getElementsByTagName) {return false;};
	if (!document.createTextNode) {return false;};
	var quotes = document.getElementsByTagName("blcokquote");
	for (var i = 0; i < quotes.length; i++) {
		if (!quotes[i].getAttribute("cite")) {
			continue;
		};
		var url = quotes[i].getAttribute("cite");
		var quoteElements = quotes[i].getElementsByTagName("*");
		if (quoteElements.length<1) {continue;};
		var elem = quoteElements[quoteElements.length-1];
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href", url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	};
}

function displayAccessKeys() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
		return false;
	};
	var links = document.getElementsByTagName("a");
	var keys = [];
	for (var i = 0; i < links.length; i++) {
		if (!links[i].getAttribute("accesskey")) {continue;};
		var key = links[i].getAttribute("accesskey");
		var text = links[i].lastChild.nodeValue;
		keys[key] = text;
	};
	var list = document.createElement("ul");
	for(key in keys) {
		var txt = keys[key];
		var str = key+": "+txt;
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	var header = document.createElement("h3");
	var header_text = document.createTextNode("AccessKeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}
addLoadEvent(displayAccessKeys);
addLoadEvent(displayCitations);
addLoadEvent(displayAbbreviations);