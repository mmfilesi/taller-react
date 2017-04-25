// sintaxis básica

()=> {
    // do stuff
}

var myFunction = ()=> {
    // do stuff
}

// sintaxis reducida
/* Cuando reciben un solo elemento por parámetro */

const foo = bar => 1;

console.log(foo(2)) // 3

// Si no hace nada más que retornar algo, podemos obviar el return y los paréntesis
const returnSum = (a, b) => a + b;
returnSum(2, 4) // 6

// Cuando lo que devuelve un objeto (aunque pueda recibir parámetros), se encapsulan el return entre paréntesis 
const returnObject = function() {
    return {
        'foo': 1,
        'bar': 2
    }
};

//equivale a:
returnObject = () => ({
    'foo': 1,
    'bar': 2
})

// Reciben parámetros x defecto
const returnSumDefault = (a=1, b=2) => a + b;
returnSumDefault() // 3

// + info: https://frontendlabs.io/3410--funciones-flecha-arrow-es6-javascript-tutorial-ecmascript-6