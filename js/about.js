function showSection(id){
    let section = document.getElementsByTagName("section");
    for(let i=0;i<section.length;i++){
        if(section[i].getAttribute("id")!=id){
            section[i].style.display = "none";
        }
        else{
            section[i].style.display = "block";
        }
    }
}
function prepareInternalval(){
    let article = document.getElementsByTagName("article");
    let nav = article[0].getElementsByTagName("nav");
    let alist = nav[0].getElementsByTagName("a");
    for(let i=0;i<alist.length;i++){
       let sectionId = alist[i].getAttribute("href").split("#")[1];
       document.getElementById(sectionId).style.display = "none";
       alist[i].destination = sectionId;
        alist[i].onclick = function(){
            showSection(this.destination);
            return false;
        }
    }
}
addLoadEvent(prepareInternalval);