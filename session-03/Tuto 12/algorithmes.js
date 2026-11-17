let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
let recherche = 31;
let position = -1;
let Maximum  = nombres[0];
let indexMaximum = [];
let Minimum = nombres[0];
let indexMinimum = [];
    for (let i = 0 ; i<nombres.length ; i++){
        if(nombres[i]===recherche){
        position=i;
        }
    }
    for(let i = 0 ; i<nombres.length ; i++){
        if(nombres[i]>Maximum ){
        Maximum =nombres[i];
        }
    }
    for(let i = 0 ; i<nombres.length ; i++){
        if(nombres[i]===Maximum){
        indexMaximum.push(i);
        }
    }

    for(let i = 0 ; i<nombres.length ; i++){
        if(nombres[i]<Minimum){
        Minimum=nombres[i];
        }
    }
    for(let i = 0 ; i<nombres.length ; i++){
        if(nombres[i]===Minimum){
        indexMinimum.push(i);
        }
    }
console.log("La valeur",nombres[position],"est présente dans le tableau." );
console.log("Maximum : ",Maximum,"(Index : ",indexMaximum,")" );
console.log("Minimum : ",Minimum,"(Index : ",indexMinimum,")");
