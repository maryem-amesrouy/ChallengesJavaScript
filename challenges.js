const categories = ["Papeterie", "Accessoires", "Sacs"];

console.log(categories[0])
let sum=0

for (let i = 0; i < categories.length; i++) {
    sum ++
    
}
console.log(sum)
const ajouterClassement=categories.push("Classement")
console.log (categories)
categories[1]="Bureau"
const sup =  categories.pop()
console.log(categories)



const boutique = {
    nom: "Stock & Fournitures",
    ville: "Youssoufia",
    ouverte: true
};


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