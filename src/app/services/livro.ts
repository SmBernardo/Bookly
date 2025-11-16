// src/app/services/livro.service.ts

import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) { }

  getLivros(termoBusca?: string): Observable<Livro[]> {
    let url = this.apiUrl;

    // O JSON-Server suporta busca com "?q="
    if (termoBusca && termoBusca.trim() !== '') {
      url += `?q=${termoBusca}`;
    }

    return this.http.get<Livro[]>(url);
  }

  // Mock Data (dados fictícios)
  // private livros: Livro[] = [
  //   {
  //     id: 1,
  //     titulo: 'O Castelo Animado',
  //     autor: 'Diana Wynne Jones',
  //     genero: 'Fantasia, Aventura',
  //     preco: 45.50,
  //     imagemUrl: 'assets/images/capas/castelo-animado.png'
  //   },
  //   {
  //     id: 2,
  //     titulo: 'O Que Tem na Geladeira?',
  //     autor: 'Rita Lobo',
  //     genero: 'Gastronomia',
  //     preco: 89.90,
  //     imagemUrl: 'assets/images/capas/o-que-tem-na-geladeira.png'
  //   },
  //   {
  //     id: 3,
  //     titulo: 'É Assim que Começa',
  //     autor: 'Colleen Hoover',
  //     genero: 'Romance',
  //     preco: 39.90,
  //     imagemUrl: 'assets/images/capas/assim-que-comeca.png'
  //   },
  //   {
  //     id: 4,
  //     titulo: 'O Pequeno Príncipe',
  //     autor: 'Antoine de Saint-Exupéry',
  //     genero: 'Fantasia, Infantil',
  //     preco: 29.90,
  //     imagemUrl: 'assets/images/capas/pequeno-principe.png'
  //   }

  // ];

  // constructor() { }

  // // função para listar os livros
  // getLivros(termoBusca?: string): Livro[] {
  //   if (!termoBusca || termoBusca.trim() === '') {
  //     return this.livros; // Retorna todos os livros se a busca for vazia
  //   }

  //   // Retorna os livros filtrados
  //   return this.livros.filter(livro =>
  //     livro.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
  //     livro.autor.toLowerCase().includes(termoBusca.toLowerCase())
  //   );
  }

  // getLivroById(id: number) { ... }
  // adicionarLivro(livro: Livro) { ... }
  // excluirLivro(id: number) { ... }
