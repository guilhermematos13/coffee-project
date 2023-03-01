import ExpressoTradicional from './assets/expresso.svg'
import Americano from './assets/americano.svg'
import Arabe from './assets/arabe.svg'
import cafeComLeite from './assets/cafeComLeite.svg'
import Capuccino from './assets/capuccino.svg'
import cafeGelado from './assets/cafeGelado.svg'
import chocolateQuente from './assets/chocolateQuente.svg'
import Cubano from './assets/cubano.svg'
import expressoCremoso from './assets/expressoCremoso.svg'
import Havaiano from './assets/havaiano.svg'
import Irlandes from './assets/irlandes.svg'
import Latte from './assets/latte.svg'
import Macchiato from './assets/macchiato.svg'
import Mochaccino from './assets/mochaccino.svg'


export const CoffeeList : CoffeeListInterface[] = [
    {
        id: "0",
        image: ExpressoTradicional,
        tags: ["tradicional"],
        title: "Expresso Tradicional",
        description:"O tradicional café feito com água quente e grãos moídos",
        coin: "R$",
        price: "9,90",
    },
   
    {
        id: "1",
        image: Americano,
        tags: ["tradicional"],
        title: "Expresso Americano",
        description:"Expresso diluído, menos intenso que o tradicional",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "2",
        image: expressoCremoso,
        tags: ["tradicional"],
        title: "Expresso Cremoso",
        description:"Café expresso tradicional com espuma cremosa",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "3",
        image: cafeGelado,
        tags: ["tradicional", "gelado"],
        title: "Expresso Gelado",
        description:"Bebida preparada com café expresso e cubos de gelo",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "4",
        image: cafeComLeite,
        tags: ["tradicional", "com leite"],
        title: "Café com Leite",
        description:"Meio a meio de expresso tradicional com leite vaporizado",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "5",
        image: Latte,
        tags: ["tradicional", "com leite"],
        title: "Latte",
        description:"Uma dose de café expresso com o dobro de leite e espuma cremosa",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "6",
        image: Capuccino,
        tags: [ "tradicional", "com leite"],
        title: "Capuccino",
        description:"Bebida com canela feita de doses iguais de café, leite e espuma",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "7",
        image: Macchiato,
        tags: ["tradicional", "com leite"],
        title: "Macchiato",
        description:"Café expresso misturado com um pouco de leite quente e espuma",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "8",
        image: Mochaccino,
        tags: ["tradicional", "com leite"],
        title: "Mochaccino",
        description:"Café expresso com calda de chocolate, pouco leite e espuma",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "9",
        image: chocolateQuente,
        tags: [ "especial", "com leite"],
        title: "Chocolate Quente",
        description:"Bebida feita com chocolate dissolvido no leite quente e café",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "10",
        image: Cubano,
        tags: [ "especial", "alcoólico", "gelado"],
        title: "Cubano",
        description:"Drink gelado de café expresso com rum, creme de leite e hortelã",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "11",
        image: Havaiano,
        tags: [ "especial" ],
        title: "Havaiano",
        description:"Bebida adocicada preparada com café e leite de coco",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "12",
        image: Arabe,
        tags: ["especial"],
        title: "Árabe",
        description:"Bebida preparada com grãos de café árabe e especiarias",
        coin: "R$",
        price: "9,90",
    },

    {
        id: "13",
        image: Irlandes,
        tags: ["especial", "alcoólico"],
        title: "Irlandês",
        description:"Bebida preparada com grãos de café árabe e especiarias",
        coin: "R$",
        price: "9,90",
    },

]