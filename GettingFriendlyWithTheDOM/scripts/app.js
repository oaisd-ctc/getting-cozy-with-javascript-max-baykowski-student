const paragraph2=document.getElementById("p2");
const showButton=document.getElementById("show");
const hideButton=document.getElementById("hide");
showButton.addEventListener('click', function(){
    paragraph2.style.display='block';
});
hideButton.addEventListener('click', function() {
    paragraph2.style.display='none';
});