function boton () {
    var body = document.body;
    var btn = document.createElement ("button");
    
    btn.innerHTML = "BOTÓN";
    btn.addEventListener ("click", function () {
        cargaPagina ();
    })
    
    body.appendChild (btn);
}

function cargaPagina() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var div = document.createElement ("div");
            
            div.innerHTML = this.responseText;
            
            document.body.appendChild (div);
        }
    };
    
    xhttp.open("GET", "pruebaAjax.html", true);
    xhttp.send();
}

window.onload = function () {
    boton ();
}