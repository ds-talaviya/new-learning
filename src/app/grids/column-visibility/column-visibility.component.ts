import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-visibility',
  templateUrl: './column-visibility.component.html',
  styleUrls: ['./column-visibility.component.scss']
})
export class ColumnVisibilityComponent {


  leadTableAnalysis = {
    name: true,
    age: false,
    email: true
  }

  users = [
    { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' }
  ];
}
