const alumnos = [
    {
        nombre: 'Juan',
        carrera: 'Biología',
        nota: 16
    },
    {
        nombre: 'Jose',
        carrera: 'Enfermero',
        nota: 10
    },
    {
        nombre: 'Luis',
        carrera: 'Policía',
        nota: 07
    }
    ,
    {
        nombre: 'Maria',
        carrera: 'Secretariado',
        nota: 10
    },
    {
        nombre: 'Hugo',
        carrera: 'Enfermero',
        nota: 15
    },
    {
        nombre: 'Rosa',
        carrera: 'Enfermero',
        nota: 12
    }
    ,
    {
        nombre: 'Luisa',
        carrera: 'Biología',
        nota: 18
    }

]

let aprobados = 0
let desaprobados = 0

let lista1 = []
let lista2 = []
let lista3 = []

// funcion promedio
const promedio = (array) => {
    let suma = array.reduce((current, previous) => current += previous)
    return prom = suma / array.length
}

console.log('---------------------------EJERCIO 1------------------------------')
// console.log('------------------------------------------------------------------')
alumnos.forEach((al) => {
    const { nombre, carrera, nota } = al

    // saber cuantos estan desacprobado o aprobados
    if (nota >= 13) {
        aprobados++
        lista1.push(nota)
    } else {
        desaprobados++
        lista2.push(nota)
    }

    // lista de todos los promedio
    lista3.push(nota)

    // nombre y carrera de cada uno.
    console.log(`Hola, mi nombre es ${nombre}, y estoy estudiando la carrera de ${carrera}`)
})

console.log('------------------------------------------------------------------')
console.log(`El promedio de la nota de los aprobados es de ${promedio(lista1)}`)
console.log(`El promedio de la nota de los desaprobados es de ${promedio(lista2)}`)
console.log(`El promedio de todas las notas es de ${promedio(lista3)}`)
console.log('------------------------------------------------------------------')
console.log(`hay ${aprobados} alumnos aprobados.`)
console.log(`hay ${desaprobados} alumnos desaprobados.`)

console.log('---------------------------EJERCIO 2------------------------------')
let array1 = []
alumnos.forEach((al) => {
    const { nombre, nota } = al
    if (nota < 13) {
        array1.push(nombre)
    }
})
console.log(array1)
console.log(`Alumnos desarpodabados ${array1}`)

console.log('---------------------------EJERCIO 3------------------------------')

alumnos.forEach((al) => {
    const { nombre, nota } = al
    let nuv_nota = nota * 3 / 2
    console.log(`La nueva nota de ${nombre} es de ${nuv_nota}`)
})