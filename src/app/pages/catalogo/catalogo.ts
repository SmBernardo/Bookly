// src/app/pages/catalogo/catalogo.ts

import { Component, OnInit } from '@angular/core'; // 1. Importe OnInit
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router'; // 2. Importe ActivatedRoute
import { Livro } from '../../models/livro.model'; // 3. Importe o modelo
import { LivroService } from '../../services/livro'; // 4. Importe o serviço

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink], // 5. CommonModule é OBRIGATÓRIO para *ngFor
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit { // 6. Implemente OnInit

  // 7. Crie uma propriedade para guardar sua lista
  listaDeLivros: Livro[] = [];

  // 8. Injete o Serviço e o ActivatedRoute
  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute
  ) { }

  // 9. ngOnInit é chamado quando o componente é carregado
  ngOnInit(): void {
    // Fica "ouvindo" qualquer mudança no parâmetro 'q' da URL
    this.route.queryParams.subscribe(params => {
      const termoBusca = params['q']; // Pega o termo da busca (ex: "stephen king")
      // Chama o serviço para pegar os livros (filtrados ou todos)
      this.listaDeLivros = this.livroService.getLivros(termoBusca);
    });
  }
}
