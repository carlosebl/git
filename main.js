function validaNumero() {
    var numA = parseFloat(document.getElementById('numA').value);
    var numB = parseFloat(document.getElementById('numB').value);

    if (numA >= numB) {
        alert ("Erro! O segundo número deve ser maior que o primeiro.")
    } else {
        alert ("Muito bem! O segundo número é maior que o primeiro.")
    }
}