"use strict";
(() => {
    //se define la tupla con : [] donde string es el primer valor que va a recibir siempre y el number el segundo
    // La tupla acepta la cantidad de argumentos que necesitemos
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Spider-man';
    hero[1] = 200;
    hero[2] = false;
    console.log(hero);
})();
