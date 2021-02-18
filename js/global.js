function insertAfter(newElement,targetElement){
    let parent = targetElement.parentNode;
    if(parent.lastNode == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.appendChild(newElement,targetElement.nextSibling);
    }
}
function addLoadEvent(func){
    let oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function highlightPage(){
    let headers = document.getElementsByTagName("header");
    let nav = headers[0].getElementsByTagName("nav");
    let links = nav[0].getElementsByTagName("a");
    let linkurl;
    for(let i=0;i<links.length;i++){
        linkurl = links[i].getAttribute("href");
        // console.log(linkurl);m
        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className = "here";
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}

addLoadEvent(highlightPage);