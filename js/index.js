function moveElement(elmentID,final_x,final_y,interval){
    let data = document.getElementById(elmentID);
    if(data.moment){
        clearTimeout(data.moment);
    }
    if(!data.style.left){
        data.style.left = "0px";
    }
    if(!data.style.top){
        data.style.top = "0px";
    }
    let x = parseInt(data.style.left);
    let y = parseInt(data.style.top);
    if(x == final_x && y == final_y){
        return true;
    }
    if(x<final_x){
        let dist = Math.ceil((final_x-x)/10);
        x+=dist;
    }
    if(x>final_x){
        let dist = Math.ceil((x-final_x)/10);
        x-=dist;
    }
    if(y<final_y){
        let dist = Math.ceil((final_y-y)/10);
        y+=dist;
    }
    if(y>final_y){
        let dist = Math.ceil((y-final_y)/10);
        y-=dist;
    }
    data.style.left = x+"px";
    data.style.top = y+"px";
    let repeat = "moveElement('"+elmentID+"',"+final_x+","+final_y+","+interval+")";
    data.moment = setTimeout(repeat,interval);
}
function prepareSlideShow(){
    let intro = document.getElementById("intro");
    let slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    // let frame = document.createElement("img");
    // frame.setAttribute("src","../image/frame.gif");
    // frame.setAttribute("alt","");
    // frame.setAttribute("id","frame");
    // slideshow.appendChild(frame);
    let preview = document.createElement("img");
    preview.setAttribute("src","image/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
    let link = intro.getElementsByTagName("a");
    for(let i=0;i<link.length;i++){
        link[i].onmouseover = function(){
            let  destination = this.getAttribute("href");
            // alert(destination);
            if(destination.indexOf("index.html")!=-1){
                moveElement("preview",0,0,5);
            }
            if(destination.indexOf("about.html")!=-1){
                moveElement("preview",-150,0,5);
            }
            if(destination.indexOf("photos.html")!=-1){
                moveElement("preview",-300,0,5);
            }
            if(destination.indexOf("live.html")!=-1){
                moveElement("preview",-450,0,5);
            }
            if(destination.indexOf("contact.html")!=-1){
                moveElement("preview",-600,0,5);
            }
        }
    }
}
addLoadEvent(prepareSlideShow);
