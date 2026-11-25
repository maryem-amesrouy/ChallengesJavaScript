const categories = ["Papeterie", "Accessoires", "Sacs"];
//////// 1 //////////////////////////

// console.log(categories[0])
// let sum=0

// for (let i = 0; i < categories.length; i++) {
//     sum ++
    
// }
// console.log(sum)
// const ajouterClassement=categories.push("Classement")
// console.log (categories)
// categories[1]="Bureau"
// const sup =  categories.pop()
// console.log(categories)

const boutique = {
    nom: "Stock & Fournitures",
    ville: "Youssoufia",
    ouverte: true
};
/////////// 2 ////////////////////////////////////////////

// console.log("La ville est",boutique.ville)
// boutique.devise="MAD"
// console.log("la devise est" ,boutique.devise)

// const ouvFer = boutique.ouverte

// if (ouvFer === true) {
//     console.log("le statut affiché est Fermée");   
// }else{
//     console.log("le statut affiché est ouverte");
    
// }


const produits = [
{
    id: 101, 
    nom: "Cahier",
    categorie: "Papeterie",
    prix: 20, 
    stock: 5 
},
{
    id: 102, 
    nom: "Stylo",
    categorie: "Papeterie",
    prix: 10, 
    stock: 0 
},
{
    id: 103,
    nom: "Trousse",
    categorie: "Accessoires",
    prix: 35, 
    stock: 3 
},
{ 
    id: 104, 
    nom: "Sac",
    categorie: "Sacs",
    prix: 120,
    stock: 2
},
{
    id: 105, 
    nom: "Classeur", 
    categorie: "Papeterie",
    prix: 30, 
    stock: 4 
}
];

//////////// 3 ////////////////////////////////


// let copieProduit =[];

// for (let i = 0; i< produits.length; i++) {
//         copieProduit.push(produits[i])
//     }
//     console.log(copieProduit)

// let copProduit = [...produits]


// for (let i = 0; i < copieProduit.length; i++) {
    
//      console.log(copieProduit[i].nom , copieProduit[i].stock)
    
// }

// for (let i = 0; i < copProduit.length; i++) {
//     let id = copieProduit[i].id
//     if (id == 102) {
//        copieProduit[i].stock=6
//        break
//     }
    
// }

// let gomme ={
//      id: 106, 
//     nom: "Gomme",
//     categorie: "Papeterie",
//     prix: 5, 
//     stock: 5
// }
// copieProduit.push(gomme)



// copieProduit.splice(3,1)

// console.log (copieProduit)



///////// 4 ///////////////////////////////////

    // const stockSupe = produits.filter((produit)=>{
    //     return produit.stock > 0
    // } )
    //  console.log (stockSupe);

    //  const papeterie = stockSupe.filter((papetrie) =>{
    //     return papetrie.categorie == "Papeterie"
    //  })

    //  console.log(papeterie)

//////////// 5 ///////////////////////////////     

// const nomProduit = produits.map((produitN) =>{
//     return produitN.nom
// })

// console.log (nomProduit)

// const prixNomProduit = produits.map((nomPrix)=>{
//     return (nomPrix.nom +" - "+ nomPrix.prix + " DH")
// })
// console.log (prixNomProduit)

/////////// 6 /////////////////////////////////////

// let stockP = produits.stock
// const unite = produits.reduce((sum , produit) =>{
//    return sum + (produit.stock)
// },0);
// console.log(unite , "unités")

// const prix = produits.reduce((sum , produit) =>{
//    return sum + (produit.stock * produit.prix)
// },0);
// console.log(prix , "DH")

//////// 7 ////////////////////////////////////

// const idProd = produits.find((produitId) => {
//     return produitId.id == 103
    // return produitId.id == 199

// })

// console.log(idProd)

// const idexProd = produits.findIndex((produitId) => {
//     return produitId.id == 103
    // return produitId.id == 199
// })

// console.log(idexProd)


////////////// 8 /////////////////////////////////

const infarStock = produits.some((produit)=>{
    return produit.stock == 0
})
console.log(infarStock)






