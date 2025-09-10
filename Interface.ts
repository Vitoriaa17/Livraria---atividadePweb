interface ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDados(): void;
    atualizarEstoque(quantidade: number): void;
}

class LivroFisico implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }

    exibirDados(): void {
        console.log("Livro Físico");
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
    }

    atualizarEstoque(quantidade: number): void {
        this.estoque += quantidade;
    }
}

class Ebook implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    tamanhoArquivo: number;

    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number, tamanhoArquivo: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanhoArquivo = tamanhoArquivo;
    }

    exibirDados(): void {
        console.log("Ebook");
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Tamanho do Arquivo: ${this.tamanhoArquivo} MB`);
        console.log("------------------------");
    }

    atualizarEstoque(quantidade: number): void {
        this.estoque += quantidade;
    }
}

class Livraria {
    private livros: ILivro[] = [];

    adicionarLivro(livro: ILivro): void {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à livraria.`);
    }

    excluirLivro(isbn: string): void {
        this.livros = this.livros.filter(livro => livro.isbn !== isbn);
        console.log(`Livro com ISBN ${isbn} foi removido.`);
    }

    venderLivro(isbn: string): void {
        const livro = this.livros.find(l => l.isbn === isbn);
        if (livro && livro.estoque > 0) {
            livro.atualizarEstoque(-1);
            console.log(`Livro "${livro.titulo}" vendido! Estoque restante: ${livro.estoque}`);
        } else {
            console.log(`Livro com ISBN ${isbn} não disponível em estoque.`);
        }
    }

    listarLivros(): void {
        console.log("Lista de Livros da Livraria:");
        this.livros.forEach(livro => livro.exibirDados());
    }
}

const livraria = new Livraria();
const livro1 = new LivroFisico("Carta de Amor aos Mortos", 2014, "123-ABC", 49.90, "Ava Dellaira", "Seguinte", 5);
const ebook1 = new Ebook("A Culpa é das Estrelas", 2012, "456-DEF", 29.90, "John Green", "Intrínseca", 10, 3);
livraria.adicionarLivro(livro1);
livraria.adicionarLivro(ebook1);

livraria.listarLivros();

livraria.venderLivro("123-ABC");
livraria.venderLivro("123-ABC");
livraria.venderLivro("456-DEF");

livraria.excluirLivro("123-ABC");

livraria.listarLivros();
