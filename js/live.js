function dispalyAbbreviations(){
    let abbr = document.getElementsByTagName("abbr");
    let def = new Array();
    for(let i=0;i<abbr.length;i++){
        let current = abbr[i];
        if(current.childNodes.length<1) continue;
        let destination = current.getAttribute("title");
        let key = current.firstChild.nodeValue;
        def[key] = destination;
    }
    let dl = document.createElement("dl");
    for(key in def){
        let destination = def[key];
        let dtitle = document.createElement("dt");
        let dt_text = document.createTextNode(key);
        dtitle.appendChild(dt_text);
        let ddesc = document.createElement("dd");
        let dd_text = document.createTextNode(destination);
        ddesc.appendChild(dd_text);
        dl.appendChild(dtitle);
        dl.appendChild(ddesc);
    }
    let article = document.getElementsByTagName("article")[0];
    let header = document.createElement("h3");
    let header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    article.appendChild(header);
    article.appendChild(dl);
}
addLoadEvent(dispalyAbbreviations);