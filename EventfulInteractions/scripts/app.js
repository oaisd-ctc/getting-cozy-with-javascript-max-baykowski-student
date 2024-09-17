            const paragraph2=document.getElementById("p2");
const showButton=document.getElementById("show");
const hideButton=document.getElementById("hide");
showButton.addEventListener('click', function(){
    paragraph2.style.display='block';
});
hideButton.addEventListener('click', function() {
    paragraph2.style.display='none';
});
const changeColor=document.getElementById("btn-change-color");
changeColor.addEventListener('click', function() {
    document.getElementById("p3").style.color=document.getElementById("txt-color").value;
});