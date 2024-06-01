

function obtenerValor() {
    var input = document.getElementById("numeros");
    var valor = input.value;
    console.log("El valor del input es" + valor)
    return valor
}

function obtenerValor2() {
    var input = document.getElementById("numeros2");
    var valor2 = input.value;
    console.log("El valor del input es" + valor2)
    return valor2
}

function obtenerValor3() {
    var input = document.getElementById("numeros3");
    var valor3 = input.value;
    console.log("El valor del input es" + valor3)
    return valor3
}

function Calcular() {
    var valor = obtenerValor() 
    var valor2 = obtenerValor2()
    var valor3 = obtenerValor3()
    var Resultado = (valor * 8) + (valor2 * 8) + (valor3 * 7)
    console.log("Resultado = " + Resultado)
    
    var resultadoDiv = document.getElementById("resultadoF")
    var p = document.createElement("p");
    p.textContent = Resultado;
    resultadoDiv.appendChild(p);
}