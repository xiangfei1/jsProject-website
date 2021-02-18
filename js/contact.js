function focusLabel(){
    let label = document.getElementsByTagName("label");
    for(let i=0;i<label.length;i++){
        label[i].onclick = function(){
            let id = this.getAttribute("for");
            let element = document.getElementById(id);
            element.focus();
        }
    }
}
function resetFields(whichform){
    for(let i=0;i<whichform.elements.length;i++){
        let element = whichform.elements[i];
        element.onfocus = function(){
            let text = this.placeholder||this.getAttribute("placeholder");
            if(this.value==text){
                this.className = "";
                this.value = "";
            }
        }
        element.onblur = function(){
            if(this.value==""){
                this.className = "placeholder";
                this.value = this.placeholder || this.getAttribute("placeholder");
            }
        } 
        element.onblur();
    }
}
function isFilled(field){
    if(field.value.replace(' ','').length == 0)return false;
    let placeholder = field.placeholder || field.getAttribute("placeholder");
    return (field.value!=placeholder);
}
function isEmail(field){
    return (field.value.indexOf('@')!=-1&&field.value.indexOf('.')!=-1);
}
function validateForm(whichform){
    for(let i=0;i<whichform.element.length;i++){
        let element = whichform.elements[i];
        if(element.required == 'required'){
            if(!isFilled(element)){
                alert("Please fill in the "+element.name+" field");
                return false;
            }
        }
        if(element.type == 'email'){
            if(!isEmail(element)){
                alert("The "+element.name+" field must be a valid email address");
                return false;
            }
        }
    }
    return true;
}
function prepareForms(){
    for(let i=0;i<document.forms.length;i++){
        let thisform = document.forms[i];
        resetFields(thisform);
        thisform.onsubmit = function(){
            return validateForm(this);
        }
    }
}
addLoadEvent(focusLabel);
addLoadEvent(prepareForms);