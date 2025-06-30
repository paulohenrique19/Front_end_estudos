import { Section } from "./components/Section"
import { CoffeeList } from "./components/CoffeeList"


import { Produto } from "../../interfaces/Produto"
import { DolarRealtime } from "../../api/dolarRealtime";
import { useState } from "react";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Expresso Tradicional",
        preco: 2.00,
        imagemUrl: "src/assets/images/Coffees/expresso_tradicional.svg",
        quantidade: 1,
        descricao: "O tradicional café feito com água quente e grãos moídos",
        categoria: ["Tradicional"]
    },
    {
        id: 2,
        nome: "Expresso Americano",
        preco: 2.00,
        imagemUrl: "src/assets/images/Coffees/expresso_americano.svg",
        quantidade: 1,
        descricao: "Expresso diluído, menos intenso que o tradicional",
        categoria: ["Tradicional"]
    },
    {
        id: 3,
        nome: "Expresso Cremoso",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/expresso_cremoso.svg",
        quantidade: 1,
        descricao: "Café expresso tradicional com espuma cremosa",
        categoria: ["Tradicional"]
    },
    {
        id: 4,
        nome: "Expresso Gelado",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/expresso_gelado.svg",
        quantidade: 1,
        descricao: "Bebida preparada com café expresso e cubos de gelo",
        categoria: ["Tradicional", "Gelado"]
    },
    {
        id: 5,
        nome: "Café com Leite",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/cafe_com_leite.svg",
        quantidade: 1,
        descricao: "Meio a meio de expresso tradicional com leite vaporizado",
        categoria: ["Tradicional", "Com Leite"]
    },
    {
        id: 6,
        nome: "Latte",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/latte.svg",
        quantidade: 1,
        descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa", 
        categoria: ["Tradicional", "Com Leite"]
    },
    {
        id: 7,
        nome: "Capuccino",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/capuccino.svg",
        quantidade: 1,
        descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
        categoria: ["Tradicional", "Com Leite"]
    },
    {
        id: 8,
        nome: "Macchiato",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/macchiato.svg",
        quantidade: 1,
        descricao: "Café expresso misturado com um pouco de leite quente e espuma",
        categoria: ["Tradicional", "Com Leite"]
    },
    {
        id: 9,
        nome: "Mocaccino",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/mocaccino.svg",
        quantidade: 1,
        descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
        categoria: ["Tradicional", "Com Leite"]
    },
    {
        id: 10,
        nome: "Chocolate Quente",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/chocolate_quente.svg",
        quantidade: 1,
        descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
        categoria: ["Especial", "Com Leite"]
    },
    {
        id: 11,
        nome: "Cubano",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/cubano.svg",
        quantidade: 1,
        descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        categoria: ["Especial", "Alcoólico", "Gelado"]
    },
    {
        id: 12,
        nome: "Havaiano",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/havaiano.svg",
        quantidade: 1,
        descricao: "Bebida adocicada preparada com café e leite de coco",
        categoria: ["Especial"]
    },
    {
        id: 13,
        nome: "Árabe",
        preco: 3.00,
        imagemUrl: "src/assets/images/Coffees/arabe.svg",
        quantidade: 1,
        descricao: "Bebida preparada com grãos de café árabe e especiarias",
        categoria: ["Especial"]
    },
    {
        id: 14,
        nome: "Irlandes",
        preco: 3.50,
        imagemUrl: "src/assets/images/Coffees/irlandes.svg",
        quantidade: 1,
        descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        categoria: ["Especial", "Alcoólico"]
    },
    {
        id: 15,
        nome: "Irlandes especial",
        preco: 0.5,
        imagemUrl: "src/assets/images/Coffees/irlandes.svg",
        quantidade: 1,
        descricao: "Bebida a base de café, uísque irlandês, açúcar e creme de leite",
        categoria: ["Especial", "Alcoólico", "Tradicional"]
    },
];


export const Home = () => {
    const [dolarValue, setDolarValue] = useState<number | null>(null);
  
    const handleDolarChange = (value: number) => {
      setDolarValue(value);
    };
  
    const produtosComPrecoConvertido = produtos.map(produto => {
      const precoConvertido = dolarValue ? produto.preco * dolarValue : produto.preco;
      return { ...produto, precoConvertido };
    });
  
    return (
      <div>
        <DolarRealtime onDolarChange={handleDolarChange} />
        <Section />
        <CoffeeList produtos={produtosComPrecoConvertido} />
      </div>
    );
  };