//1
console.log(hello); // lo registramos como indefinido porque hello aun no existe
var hello = 'world'; // la declaración se hoistea en la cima del ámbito por sí misma
// RES= respuesta indefinida, al reescribir se imprime correctamente "world"
//Reescrito

    var hello = "world";
    console.log(hello);




//2
var needle = 'haystack'; // "needle" es una declaración, es global y se hoistea
test();     //indefinido porque no existe test a este ambito
function test(){        //test se hoistea en la cima a espera ser ejecutada
	var needle = 'magnet';  //needle es propio solo de "test" y se hostea en su ambito
	console.log(needle);    //imprime "magnet" solo si es llamada la funcion, lo que nunca ocurre
}
// RES= respuesta indefinida,al reescribir se altera la var global needle de "haystack" a "magnet"
//Reescrito
    var needle = 'haystack'; 
    function test(){ 
        let needle = 'magnet'; 
        console.log(needle);  
    }
    test();  


//3
var brendan = 'super cool'; //brendan es global y asume "super cool"
function print(){   //print se hoistea en la cima a espera ser ejecutada
	brendan = 'only okay'; //brendan es propio solo de "print" y se hostea en su ambito
	console.log(brendan);  //imprime "only okay" solo si es llamada la funcion, lo que nunca ocurre
}
console.log(brendan);   //imprime "super cool" porque es global
// RES= respuesta indefinida,al reescribir y llamar a la funcion,se altera la var global brendan 
//   imprime 2 veces "only okay"
//Reescrito
    let brendan = 'super cool';
    function print(){   
        brendan = 'only okay';
        console.log(brendan); 
    }
    print();
    console.log(brendan);   




//4
var food = 'chicken';  //food es global y asume "chicken"
console.log(food);  //imprime food que es el texto "chicken" 
eat();  //indefinido porque no existe "eat" a este ambito
function eat(){  //"eat" se hoistea en la cima a espera ser ejecutada
	food = 'half-chicken';  //"food" es propio solo de "eat" y se hostea en su ambito
	console.log(food);  //imprime "half-chicken" solo si es llamada la funcion, lo que nunca ocurre
	var food = 'gone'; //redefine una variable ya declarada, indefinido
}
// RES= respuesta indefinida, al reescribir y llamar a la funcion, se altera la var global food y se imprime
//  chicken como 1er print y luego "half-chicken" que esta dentro de la funcion, el texto "gone" no se imprime
//  porque no hay console.log que lo haga, al cambiar a Let dentro de la funcion "var food="gone" se
//  indetermina la funcion con error
//Reescrito
    var food = 'chicken'; 
    function eat(){  
        food = 'half-chicken'; 
        console.log(food); 
        var food = 'gone'; 
    }
    eat();  
    console.log(food);  




//5
mean(); //indefinido porque no existe "mean" a este ambito
console.log(food);  //indefinido porque no existe "food" a este ambito
var mean = function() { //"mean" se hoistea en la cima a espera ser ejecutada
	food = "chicken";   //"food" es propio solo de "mean" y se hostea en su ambito
	console.log(food);  //imprime "chicken" solo si es llamada la funcion, lo que nunca ocurre
	var food = "fish";  //redefine una variable ya declarada, indefinido
	console.log(food);  //imprime "fish" solo si es llamada la funcion, lo que nunca ocurre
}
console.log(food);  //indefinida, nunca se asigno y tampoco se ejecuta la funcion
// RES= respuesta indefinida, al reescribir y llamar a la funcion, se altera la var global food y se imprime
//  chicken como 1er print y luego "fish" que esta dentro de la funcion, pero el console fuera de funcion entrega
//  error porque la variable "food" no existe fuera del ambito de la funcion
    //Reescrito
    var mean = function() { 
        food = "chicken";   
        console.log(food);  
        var food = "fish"; 
        console.log(food);
    }
    mean(); 
    console.log(food); 





//6
console.log(genre);  //indefinida, nunca se definio ni declaro
var genre = "disco";    //"genre" es global y asume "disco"
rewind();    //indefinido porque no existe la funcion "rewind" a este ambito
function rewind() { //"rewind" se hoistea en la cima a espera ser ejecutada
	genre = "rock"; //"genre" es propio solo de "rewind" y se hostea en su ambito
	console.log(genre); //imprime "rock" solo si es llamada la funcion, lo que nunca ocurre
	var genre = "r&b";  //"genre" se redefine en "rewind" 
	console.log(genre); //imprime "r&b" solo si es llamada la funcion, lo que nunca ocurre
}
console.log(genre); //imprime el genero global
// RES= respuesta indefinida, al reescribir imprime "disco" en genre como 1er console.log, y tambien rock y r&b
//   que estan dentro de la funcion, al salir de ella imprime "disco" porque no fue alterada en la funcion
    //Reescrito
        let genre = "disco"; 
        console.log(genre);  
        function rewind() { 
            genre = "rock"; 
            console.log(genre); 
            var genre = "r&b";  
            console.log(genre); 
        }
        rewind();    
        console.log(genre); 


//7
dojo = "san jose";  //"dojo" es global y asume "san jose"
console.log(dojo);  //imprime "san jose" el genero global
learn();    //indefinido porque no existe la funcion "learn" a este ambito
function learn() {  //"learn" se hoistea en la cima a espera ser ejecutada
	dojo = "seattle";   //este "dojo" es propio solo de "learn" y se hostea en su ambito
	console.log(dojo);  //imprime "seattle"  como ambito de la funcion
	var dojo = "burbank";   //redefine una variable ya declarada, indefinido
	console.log(dojo);  //imprime dojo como ambito local
}
console.log(dojo);  //imprime como variable global
// RES= respuesta indefinida, al reescribir imprime "san jose" como var global y 1er console.log, luego "seattle"
//   y "burbank" que estan dentro de la funcion, al salir de ella imprime "san jose" porque no fue alterada en la funcion
    //Reescrito
        dojo = "san jose";  
        console.log(dojo);  
        function learn() { 
            dojo = "seattle"; 
            console.log(dojo);
            var dojo = "burbank";
            console.log(dojo);  
        }
        learn();    
        console.log(dojo); 



//8
console.log(makeDojo("Chicago", 65));    //indefinido porque no existe la funcion "makeDojo" a este ambito
console.log(makeDojo("Berkeley", 0));   //indefinido porque no existe la funcion "makeDojo" a este ambito
function makeDojo(name, students){      //"makeDojo" se hoistea en la cima a espera ser ejecutada
        const dojo = {};    //const "dojo" es propio solo de "makeDojo" y se hostea en su ambito, sin estructura
        dojo.name = name;   //indefinido porque no existe name en la estructura dojo
        dojo.students = students;   //indefinido porque no existe students en la estructura dojo
        if(dojo.students > 50){ //indefinido porque no existe studens en la estructura dojo
            dojo.hiring = true; //indefinido porque no existe hiring en la estructura dojo
        }
        else if(dojo.students <= 0){    //indefinido porque no existe studens en la estructura dojo
            dojo = "closed for now";    //indefinido, dojo es una estructura
        }
        return dojo;    //indefinido 
}
// RES= respuesta indefinida, al reescribir y corregir ubicacion de console.log ademas de 
//   dojo = "close for now"  quedo como dojo.txterror="close for now" ya que dojo es una estructura de 
//   objeto y no se puee asignar texto sin indicar la propiedad
    //Reescrito
        function makeDojo(name, students){   
                const dojo = {};  
                dojo.name = name; 
                dojo.students = students;
                if(dojo.students > 50){ 
                    dojo.hiring = true; 
                }
                else if(dojo.students <= 0){
                    dojo.txterror = "closed for now";
                }
                return dojo; 
        }
        console.log(makeDojo("Chicago", 65));
        console.log(makeDojo("Berkeley", 0));
