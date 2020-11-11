let darkMode = document.getElementById("body_dark_mode");

darkMode.addEventListener("click", function(event){
    darkMode.classList.add("dark_mode");
});

darkMode.addEventListener("dblclick", function(){
    darkMode.classList.remove("dark_mode");
});
