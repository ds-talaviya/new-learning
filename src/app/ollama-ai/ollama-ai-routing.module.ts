import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OllamaAiComponent } from './ollama-ai/ollama-ai.component';

const routes: Routes = [
  {
    path: '', component: OllamaAiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OllamaAiRoutingModule { }
