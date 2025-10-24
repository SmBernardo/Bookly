// src/app/services/livro.service.ts

import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model'; // 1. Importe sua interface

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  // 2. Crie sua lista de "Mock Data" (dados fictícios)
  private livros: Livro[] = [
    {
      id: 1,
      titulo: 'O Castelo Animado',
      autor: 'Diana Wynne Jones',
      genero: 'Fantasia, Aventura',
      preco: 45.50,
      imagemUrl: 'assets/Images/capas/castelo-animado.png'
    },
    {
      id: 2,
      titulo: 'O Que Tem na Geladeira?',
      autor: 'Rita Lobo',
      genero: 'Gastronomia',
      preco: 89.90,
      imagemUrl: 'assets/Images/capas/o-que-tem-na-geladeira.png'
    },
    {
      id: 3,
      titulo: 'É Assim que Começa',
      autor: 'Colleen Hoover',
      genero: 'Romance',
      preco: 39.90,
      imagemUrl: 'assets/Images/capas/assim-que-comeca.png'
    },
    {
      id: 4,
      titulo: 'O Pequeno Príncipe',
      autor: 'Antoine de Saint-Exupéry',
      genero: 'Fantasia, Infantil',
      preco: 29.90,
      imagemUrl: 'assets/Images/capas/pequeno-principe.png'
    }
    // Adicione mais livros copiando do seu HTML
  ];

  constructor() { }

  // 3. Crie uma função para "Listar" os livros
  // Esta é a sua funcionalidade de "listagem" e "pesquisa"
  getLivros(termoBusca?: string): Livro[] {
    if (!termoBusca || termoBusca.trim() === '') {
      return this.livros; // Retorna todos os livros se a busca for vazia
    }

    // Retorna os livros filtrados (simulando a "pesquisa")
    return this.livros.filter(livro =>
      livro.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termoBusca.toLowerCase())
    );
  }

  // No futuro, você pode adicionar outras funções do CRUD aqui
  // getLivroById(id: number) { ... }
  // adicionarLivro(livro: Livro) { ... }
  // excluirLivro(id: number) { ... }
}
