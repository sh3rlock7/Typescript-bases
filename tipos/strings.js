"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    //Posible errores en typescript
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No Esta Presente');
    //A pesar de que la variable batman no tiene 10 posiciones no lo marca como un error en la aplicacion batman[10] = undefined <--- marca en la consola
    // el simbolo ? = ( null check ) se usa para que sea opcional que exista
})();
