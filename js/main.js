let a;
function showpic(){
        let hide = document.getElementById("hide");
        if(a==1){
            document.getElementById("pic").style.display = "inline";
            hide.style.display = "none";
            return a=0;
        } else {
            document.getElementById("pic").style.display = "none";
            hide.innerHTML = "Its Hidden";
            hide.style.textAlign = "center";
            return a = 1;
        }
}