import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = null;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // 1. Recupera o usuário salvo no localStorage
    const usuarioSalvo = localStorage.getItem('usuarioLogado');

    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    } else {
      // Se não tiver ninguém logado, manda pro login
      this.router.navigate(['/login']);
    }
  }

  logout() {
    // Limpa o armazenamento e vai para login
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }

  excluirConta() {
    if (confirm('Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.')) {
      if (this.usuario && this.usuario.id) {
        this.usuarioService.excluirUsuario(this.usuario.id).subscribe(() => {
          alert('Conta excluída com sucesso.');
          this.logout();
        });
      }
    }
  }

  alterarSenha() {
    alert('Funcionalidade de alterar senha será implementada em breve!');
  }
}
