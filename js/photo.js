function showPic(whichpic){
    let placeholder = document.getElementById("placeholder");
    let source = whichpic.getAttribute("href");
    placeholder.setAttribute("src",source);
    let description = document.getElementById("description");
    description.firstChild.nodeValue = whichpic.getAttribute("title");
    return false;
}
function preparePlaceholder(){
    let placeholder = document.createElement("img");
    placeholder.setAttribute("src","image/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    placeholder.setAttribute("id","placeholder");
    let description = document.createElement("p");
    description.setAttribute("id","description");   
    let destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    let gallery = document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}
function prepareGallery(){
    let gallery = document.getElementById("imagegallery");
    let alist = gallery.getElementsByTagName("a");
    for(let i=0;i<alist.length;i++){
        alist[i].onclick = function(){
            return showPic(this);
        }
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);