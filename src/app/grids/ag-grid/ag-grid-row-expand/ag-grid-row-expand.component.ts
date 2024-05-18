import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-row-expand',
  templateUrl: './ag-grid-row-expand.component.html',
  styleUrls: ['./ag-grid-row-expand.component.scss']
})
export class AgGridRowExpandComponent {
  columnDefs: any[] = [
    { headerName: 'Name', field: 'name', cellRenderer: 'agGroupCellRenderer' },
    { headerName: 'Age', field: 'age' }
  ];

  datasource = {
    getRows: (params: any) => {
      params.successCallback(
        [
          { name: 'Daniel', age: 15 },
          { name: 'Anna', age: 42 },
          { name: 'Josephine', age: 32 },
          { name: 'John', age: 27 }
        ],
        4
      );
    }
  };

  detailTableParams: any = {
    detailGridOptions: {
      columnDefs: [
        { headerName: 'Product', field: 'product', rowGroup: true, hide: true },

        { headerName: 'Amount', field: 'amount' }
      ],
      onGridReady: function (params: any) {
        params.api.setDomLayout('autoHeight');
        params.api.sizeColumnsToFit();
      }
    },
    getDetailRowData: (params: any) => {
      params.successCallback(this.getDetailData(), 3);
    }
  };

  gridApi: any;
  isExpandedGrid = false;

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setServerSideDatasource(this.datasource);
  }

  private getDetailData() {
    return [
      { product: 'Coffee', amount: this.getRandomNumber() },
      { product: 'Water', amount: this.getRandomNumber() },
      { product: 'Bread', amount: this.getRandomNumber() }
    ];
  }
  onExpandCollapseAll() {
    this.gridApi.forEachNode((node: any) => {
      if (node.expanded) {
        node.setExpanded(false);
        this.isExpandedGrid = false;
      } else {
        node.setExpanded(true);
        this.isExpandedGrid = true;
      }
    });
    this.gridApi.forEachDetailGridInfo((grid: any) => {
      grid.api.forEachNode((node: any) => {
        if (node.expanded) {
          node.setExpanded(false);
          this.isExpandedGrid = false;
        } else {
          node.setExpanded(true);
          this.isExpandedGrid = true;
        }
      });
    });
  }

  private getRandomNumber() {
    return Math.round(Math.random() * 100);
  }
}
