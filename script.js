//Esto agrega a la pantalla el valor del boton que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//Esta accion toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}