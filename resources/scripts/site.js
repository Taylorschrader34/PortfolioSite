var elementList = document.getElementsByClassName('skill-icon');

for(var i=0;i<elementList.length;i++){
     elementList[i].addEventListener("click", function(){
        this.style.transform = "rotate(180deg)"; 
    }, false);   
}


