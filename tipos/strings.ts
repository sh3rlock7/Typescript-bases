(()=> {
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Heroe: Volcan Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    //Posible errores en typescript
    console.log( batman[10]?.toUpperCase() || 'No Esta Presente' )
    
    //A pesar de que la variable batman no tiene 10 posiciones no lo marca como un error en la aplicacion batman[10] = undefined <--- marca en la consola

    // el simbolo ? = ( null check ) se usa para que sea opcional que exista
})()