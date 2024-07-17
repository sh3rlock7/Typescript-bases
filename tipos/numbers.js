"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log('estamos en problema');
    }
    else {
        console.log('estamos salvados');
    }
    //Posible error 
    avengers = Number('55A');
    console.log({ avengers });
    // NaN es considerado un numero en javascript por lo que puede ocasionar problemas de logica
})();
