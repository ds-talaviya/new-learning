import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OllamaAiRoutingModule } from './ollama-ai-routing.module';
import { OllamaAiComponent } from './ollama-ai/ollama-ai.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OllamaAiComponent
  ],
  imports: [
    CommonModule,
    OllamaAiRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class OllamaAiModule { }
