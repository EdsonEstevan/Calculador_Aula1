function CalSorvete(valor1,valor2,valor3) {
    return valor3 + valor1 * valor2

}

function ResSorvete() {
    const V1 = parseInt(document.getElementById('valor1').value)
    const V2 = parseInt(document.getElementById('valor2').value)
    const V3 = parseInt(document.getElementById('valor3').value)
    const resultado = CalSorvete(V1,V2,V3)
    document.getElementById('resposta').innerHTML = ("Resposta "+resultado)
}

document.getElementById('btnCalcular').addEventListener('click',ResSorvete)