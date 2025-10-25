// src/app/models/livro.model.ts

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  imagemUrl: string;
}
