//console.log('Hola')

const largo = 4
const ancho = 3;

console.log(largo * ancho)

// Declarar una variable: Separar espacio en la memoria
// Palabra reservada --> const, let, var

// Inicializar --> Darle un valor a una variable

// const --> constante no cambiar el valor asignado
// var   --> permite cambiar el valor (diferencia en el scope)
// let   --> permite cambiar el valor (diferencia en el scope)

const x = 10;

// 1. Calcular el área de un triángulo
// const base = 10;
// const altura = 20;

// Crear funciones
function calcularAreaTriangulo(base, altura) {
    return base * altura;
}

//Llamar a la función
const base = 10;
const altura = 20;
const area = calcularAreaTriangulo(10, 20)
console.log(`El área del triángulo de base ${base} y altura ${altura} es ${area}`)

// 2. Calcular el igv de una venta
const cantidad = 10
const precio = 3.5

function calcularIgv(cantidad, precio) {
    const venta = cantidad * precio
    const igv = 0.18 * venta
    return igv
}

const igv = calcularIgv(10, 3.5)
//mensajeConsola('El igv es ' + igv)

// backquotes Alt + 96
mensajeConsola(`El igv es ${igv}`)



function mensajeConsola(mensaje) {
    console.log(mensaje)
}

/*
    Comentario
    Multilinea
*/

// () {} []
// Operadores

// Asignación = --> Da el valor a una variable    --> variable = valor
// Aritméticos + - * / 
// Orden > < == !=                  
// Lógica && And  || Or  ! Not

let y = 10
console.log('El valor de y es', y)
y = 20;
console.log('El valor de y es', y)

console.log('SUMA', 10 + 20)
console.log('RESTA', 10 - 20)
console.log('PROD', 10 * 20)
console.log('DIV', 10 / 20)

// Lo vamos a utilizar más con condicionales
console.log('>', 10 > 20)
console.log('<', 10 < 20)
console.log('!=', 10 != 20)
console.log('==', 10 == 20)

// Leyes de morgan --> Investigar
// AND --> p = true  and   q = true  --> true  todos los demás casos es false
// OR  --> p = false or    q = false --> false todos los demás casos es true
// Not --> p = false --> not(p) = true

// Lo vamos a utilizar más con condicionales
console.log('And', (10 > 20) && (5 > 0))        // p = (10 > 20) And q = (5 > 0)
console.log('Or', (10 > 20) || (5 > 0))        // p = (10 > 20) Or  q = (5 > 0)
console.log('Not', !((10 > 20) && (5 > 0)))     // p = (10 > 20) And q = (5 > 0)

// 1 Mes Básico Condicionales Bucles
// 1 Mes Intermedio Arreglos String
// 1 Mes Objetos, Lectura de documentos,  2 Base de datos 
// 1 Mes ApiRest 
// 1 Front html + css + js dom 
// 1 Front react

// 3. Calcular el área del triángulo sabiendo sus lados
// area = sqr(p * (p - l1) * (p - l2) * (p - l3) )

function calcularTrianguloHeron(l1, l2, l3) {
    const per = l1 + l2 + l3;
    const semiPer = per / 2;
    const areaT = Math.sqrt(semiPer * (semiPer - l1) * (semiPer - l2) * (semiPer - l3))
    return areaT
}

// Nan Not a Number
const areaTri = calcularTrianguloHeron(3, 4, 'Texto')
console.log(`El área del triángulo es`, areaTri)


// 4. Calcular los días faltantes para navidad
/*
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const fechaNavidad = new Date(anioActual, 11, 25);          // Enero = 0 --> Diciembre = 11
    const diferencia = fechaNavidad - fechaActual;
    const diasCantidad = Math.ceil(diferencia / (1000 * 60 * 60 * 24))
    console.log(`Faltan ${diasCantidad} para navidad`)
*/

// 5. Calculadora de días entre la fecha de hoy y cualquier fecha
 

function calcularDias(anio, mes, dia) {
    const fechaActual = new Date
    const fechaComparar = new Date(anio, mes, dia);  
    const diferencia = fechaComparar - fechaActual;
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24))
}

const dias = calcularDias(2023, 11, 31)
const dias2 = calcularDias(2023, 10, 31)
const dias3 = calcularDias(2024, 0, 31)
const dias4 = calcularDias(2023, 11, 25)

console.log(`Faltan ${dias} para terminar el contrato de la persona 1`)
console.log(`Faltan ${dias2} para terminar el contrato de la persona 2`)
console.log(`Faltan ${dias3} para terminar el contrato de la persona 3`)
console.log(`Faltan ${dias4} para terminar el contrato de la persona 4`)

 
 