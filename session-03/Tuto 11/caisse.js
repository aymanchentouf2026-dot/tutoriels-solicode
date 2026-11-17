let panier = [15, 42, 5, 89, 12, 50, 8];
let somme = 0;
let chers = 0 ;
let Montant = 0;
for(let i=0 ; i<panier.length ; i++){
    somme=somme+panier[i];
    if( panier[i]>= 20 ){
    chers = chers+1;
    Montant = Montant+panier[i];
    }
}
console.log("Total du panier : ", somme);
console.log("Nombre d'articles chers : " , chers );
console.log("Montant des articles chers : ",Montant);

// let mots = ["chat", "ordinateur", "table", "programmation", "js"];
// let motsLongs = 0 ;
// for (let i = 0 ;i<mots.length;i++){
//     if(mots[i].length > 5){
//         motsLongs=motsLongs+1;
//     }
// }
// console.log(motsLongs);
