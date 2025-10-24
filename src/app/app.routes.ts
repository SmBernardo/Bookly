import { Component } from '@angular/core';
// src/app/app.routes.ts

import { Routes } from '@angular/router';

// Importe os componentes que você acabou de criar
// Note que o caminho é o NOME DO ARQUIVO (tudo minúsculo)
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { CadastroComponent } from './pages/cadastro/cadastro';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { ObrigadoComponent } from './pages/obrigado/obrigado';

export const routes: Routes = [
    // Rota padrão (ex: localhost:4200) vai para a Home
    { path: '', component: HomeComponent },

    // Outras rotas
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'obrigado', component: ObrigadoComponent },

    // (Opcional) Rota "coringa" para redirecionar se a URL não existir
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
