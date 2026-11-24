const categories = ["Papeterie", "Accessoires", "Sacs"];

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


let copieProduit =[];

for (let i = 0; i< produits.length; i++) {
        copieProduit.push(produits[i])
    }
    console.log(copieProduit)

let copProduit = [...produits]


for (let i = 0; i < copieProduit.length; i++) {
    
     console.log(copieProduit[i].nom , copieProduit[i].stock)
    
}

for (let i = 0; i < copProduit.length; i++) {
    let id = copieProduit[i].id
    if (id == 102) {
       copieProduit[i].stock=6
       break
    }
    
}

let gomme ={
     id: 106, 
    nom: "Gomme",
    categorie: "Papeterie",
    prix: 5, 
    stock: 5
}
copieProduit.push(gomme)



copieProduit.splice(3,1)

console.log (copieProduit)