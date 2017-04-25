// Solo es accesible lo que exportamos

export hello = 'Hello World';

// export default
// si cargo lo que hay en este archivo, sin especificar nada, se importará esta función
export default function (x, y) {
    return x * y;
};

// import
import { hello } from 'modules';
