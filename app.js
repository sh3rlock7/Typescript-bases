"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["Acuaman"] = 0] = "Acuaman";
        PowerLevel[PowerLevel["Batman"] = 1] = "Batman";
        PowerLevel[PowerLevel["Flash"] = 5] = "Flash";
        PowerLevel[PowerLevel["Superman"] = 100] = "Superman";
    })(PowerLevel || (PowerLevel = {}));
    const fuerzaAcuaman = PowerLevel.Acuaman;
    const fuerzaBatman = PowerLevel.Batman;
    const fuerzaFlash = PowerLevel.Flash;
    const fuerzaSuperman = PowerLevel.Superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
