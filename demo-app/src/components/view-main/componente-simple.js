import React from 'react';

/* El tipo de componente más sencillo que hay en React es una función que devuelve
código jsx sin lógica alguna */

/* const ComponenteSimple = () => {
  return (
    <h3>Soy un componente mondo lirondo</h3>
  )
} */

/* Aunque nos parezca html, jsx es javaScript, por lo que en medio de la "plantilla" podemos
incluir código js ejecutable. Para eso, hay que indicarlo entre llaves */

const ComponenteSimple = () => {
  return (
    <h3>Soy un componente mondo lirondo {2+2}</h3>
  )
}

export default ComponenteSimple;