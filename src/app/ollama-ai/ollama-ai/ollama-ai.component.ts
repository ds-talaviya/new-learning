import { Component } from '@angular/core';
import { OllamaAiService } from '../ollama-ai.service';

@Component({
  selector: 'app-ollama-ai',
  templateUrl: './ollama-ai.component.html',
  styleUrls: ['./ollama-ai.component.scss']
})
export class OllamaAiComponent {
  data = JSON.stringify([
    { name: 'Alice', age: 25, job: 'Designer' },
    { name: 'Bob', age: 30, job: 'Engineer' },
    { name: 'Charlie', age: 28, job: 'Manager' }
  ]);
  todo = "Summarize the following JSON data in simple sentences";

  summary = '';
  loading = false;
  error = '';

  constructor(private summaryService: OllamaAiService) { }

  generateSummary() {
    this.loading = true;
    this.error = '';
    this.summary = '';

    let payload = {
      data: JSON.parse(this.data),
      todo: this.todo
    }
    this.summaryService.getSummary(payload).subscribe({
      next: (res) => {
        this.summary = res.summary;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to generate summary';
        this.loading = false;
      }
    });
  }

  resetData() {
    this.summary = '';
    this.error = '';
    this.loading = false;
  }
}
