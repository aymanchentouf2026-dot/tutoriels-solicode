let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let somme = 0;
let Maximum = ventes[0];
let Minimum = ventes[0];
let Exceptionnelles = 0;
let sommeExceptionnelle = 0;
for(let i =0 ;i<ventes.length;i++){
    somme= somme + ventes[i];
    if(ventes[i]>Maximum){Maximum = ventes[i]};
    if(ventes[i]<Minimum){Minimum = ventes[i]};
    if(ventes[i]>=130){
        Exceptionnelles = Exceptionnelles + 1;
        sommeExceptionnelle = sommeExceptionnelle + ventes[i];};
}
console.log("Le nombre total de ventes réalisées    : " , ventes.length);
console.log("Le chiffre d’affaires total            : " , somme);
console.log("Le montant de la vente la plus élevée  : " , Maximum);
console.log("Le montant de la vente  la plus faible : " , Minimum);
console.log("Le nombre de ventes Exceptionnelles    : " , Exceptionnelles);
console.log("CA exceptionnel                        : " , sommeExceptionnelle);
