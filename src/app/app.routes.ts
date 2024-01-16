import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Conteudo1Component } from './conteudo1/conteudo1.component';
import { Conteudo2Component } from './conteudo2/conteudo2.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TitleComponent } from './title/title.component';

export const routes: Routes = [
  {path: 'Conteudo1', component: Conteudo1Component},
  {path: 'Conteudo2', component: Conteudo2Component}
];
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    RodapeComponent,
    TitleComponent,
    Conteudo1Component,
    Conteudo2Component,
  ]
})
export class AppComponent {
  title = 'SENAI EAD';
}
