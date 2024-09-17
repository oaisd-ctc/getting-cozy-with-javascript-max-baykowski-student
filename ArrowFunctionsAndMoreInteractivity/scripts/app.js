const comboBox=document.getElementById("shape");
comboBox.addEventListener('change', function() {
    document.querySelector(".result").textContent=comboBox.value;
});