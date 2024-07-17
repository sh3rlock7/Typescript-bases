(()=> {

    //Una funcion con el tipo never es por lo general una funcion que termina en un error
    const error = (message: string):(never| number) => {
        
        //al incluir el if existe la posibilidad de que nunca se ejecute y al no tener un return implicito retorna void
        //por lo que se le añade el return y especifica el tipo de dato junto al never entre ( | ) 
        if( false ){
            throw new Error(message)
        }
        return 1;
    }

    error('Auxilio');
})();