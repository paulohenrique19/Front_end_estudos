export interface Produto {
    id: number;
    nome: string;
    preco: number;
    imagemUrl: string;
    quantidade: number;
    descricao?: string;
    categoria?: string[];
}