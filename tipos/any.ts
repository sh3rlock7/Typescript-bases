(()=>{
    //El tipo any anula la comprobacion de tipos de typescript pero perdemos la ayuda del editor de codigo

    
    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    // console.log(avenger.charAt(0));
    //as string le dice a TS que trate a la variable como string
    console.log((avenger as string).charAt(0));


    avenger = 150.23256415;
    console.log(<number>avenger.toFixed(2));
    // <number> es otra forma de escribir el "as string"

    console.log(exists);
    console.log(power);
})()