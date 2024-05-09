import { Component, OnInit } from '@angular/core';

import { OrgChart } from 'd3-org-chart';
@Component({
  selector: 'app-basic-org-graph',
  templateUrl: './basic-org-graph.component.html',
  styleUrls: ['./basic-org-graph.component.scss']
})
export class BasicOrgGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  data: any = [];
  chart: any;
  createChart() {
    const data: any = [{
      name: 'CEO',
      children: [
        { name: 'Manager 1' },
        { name: 'Manager 2' },
        {
          name: 'Manager 3',
          children: [
            { name: 'Team Lead 1' },
            { name: 'Team Lead 2' },
            { name: 'Team Lead 3' }
          ]
        }
      ]
    }];

    const chart = new OrgChart();
    chart
      .container('#chartContainer')
      .data(data)
      .render();
  }


}
