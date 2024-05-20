import { Component, OnInit } from '@angular/core';
import { Column } from 'ag-grid-community';
import { TreeNode } from 'primeng/api';
import { primengData } from './data';

@Component({
  selector: 'app-primeng-row-expand-fixed-column',
  templateUrl: './primeng-row-expand-fixed-column.component.html',
  styleUrls: ['./primeng-row-expand-fixed-column.component.scss']
})
export class PrimengRowExpandFixedColumnComponent implements OnInit {
  files: TreeNode[] = primengData;
  scrollableCols = [
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ]

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ]

  frozenCols = [{ field: 'name', header: 'Name' }];
  selectedColumns: Column[];
  ngOnInit() {

  }
}