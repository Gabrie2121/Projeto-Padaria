setInterval(function () {
    let novaHora = new Date();
    
    document.getElementById("labelCod").innerHTML = novaHora;
}, 1000)