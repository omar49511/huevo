let clicks = 1000;
document.getElementById("mensaje").innerText= clicks;
function contador(){
    --clicks;
    if(clicks>0){
        let ob = document.getElementById("counting");
            ob.classList.add("huevo-click");
            setTimeout(function(){
                ob.classList.remove("huevo-click");
            }, 100);
    }
    document.getElementById("mensaje").innerHTML= clicks;
    if(clicks<=0){
        document.getElementById("mensaje").innerHTML="ganaste";
    }
}
function cambioColor(x){
    let skin = document.getElementById("counting");
    switch (x) {
        case 1:         
            skin.style.background = "radial-gradient(circle, rgba(3,100,100,1) 40%, rgba(54,179,209,1) 2%, rgba(63,170,210,1) 41%, rgba(39,157,195,1) 71%, rgba(16,144,181,1) 50%)";
            break;
        case 2:
            skin.style.background = "radial-gradient(circle, rgba(197,51,209,1) 5%, rgba(192,54,209,1) 22%, rgba(194,63,210,1) 51%, rgba(195,39,191,1) 71%, rgba(176,16,181,1) 90%)";
            break;
    
        default:
            skin.style.backgroundImage = "linear-gradient(180deg, #ffe1aa 0, #ffd4a7 16.67%, #ffc7a2 33.33%, #f2b99d 50%, #e1ac97 66.67%, #d1a092 83.33%, #c2968d 100%)";
            break;
    }
}