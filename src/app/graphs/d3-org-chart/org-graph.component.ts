import { Component, OnInit } from '@angular/core';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-org-graph',
  templateUrl: './org-graph.component.html',
  styleUrls: ['./org-graph.component.scss']
})
export class OrgGraphComponent implements OnInit {
  constructor() { }
  chart: any;
  tableChart: boolean = false;

  ngOnInit(): void {
    this.createChart();
  }

  onChangeChartType() {
    this.tableChart = !this.tableChart;
    if (!!this.tableChart) {
      this.createTableChart();
    } else {
      this.createChart();
    }
  }

  downloadPdf(chart: any) {
    chart.exportImg({
      save: false,
      full: true,
      onLoad: (base64: any) => {
        var pdf: any = new jsPDF();
        var img = new Image();
        img.src = base64;
        img.onload = function () {
          pdf.addImage(
            img,
            'JPEG',
            5,
            5,
            595 / 3,
            ((img.height / img.width) * 595) / 3
          );
          pdf.save('chart.pdf');
        };
      },
    });
  }

  filterChart(e: any) {
    // Get input value
    const value = e.srcElement.value;

    // Clear previous higlighting
    this.chart.clearHighlighting();

    // Get chart nodes
    const data = this.chart.data();

    // Mark all previously expanded nodes for collapse
    data.forEach((d: any) => (d._expanded = false));

    // Loop over data and check if input value matches any name
    data.forEach((d: any) => {
      if (value != '' && d.name.toLowerCase().includes(value.toLowerCase())) {
        // If matches, mark node as highlighted
        d._highlighted = true;
        d._expanded = true;
      }
    });

    // Update data and rerender graph
    this.chart.data(data).render().fit();

    console.log('filtering chart', e.srcElement.value);
  }

  createChart() {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/data-oracle.csv'
    ).then((data) => {
      this.chart = new OrgChart()
        .nodeHeight((d) => 85 + 25)
        .nodeWidth((d) => 220 + 2)
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 35)
        .compactMarginPair((d) => 30)
        // .neightbourMargin((a, b) => 20)
        .onNodeClick((d: any) => {
          this.highLightNodePath(d.data);
        })
        .nodeContent(function (d: any, i, arr, state) {
          const color = '#FFFFFF';
          const imageDiffVert = 25 + 2;
          return `
                  <div style='width:${d.width
            }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                          <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                              <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${d.data.id
            }</div>
                              <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
                              <div style="margin-top:${-imageDiffVert - 20
            }px;">   <img src=" ${d.data.image}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                              <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${d.data.name
            } </div>
                              <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${d.data.position
            } </div>
  
                          </div>
                      </div>
                              `;
        })
        .container('.chart-container')
        .data(data)
        .render();
    });
  }

  // light whole path of node
  highLightNodePath(node: any) {
    this.chart.render().clearHighlighting();
    this.chart.setUpToTheRootHighlighted(node.id).render();
  }

  resetChart() {
    const data = this.chart.data();
    data.forEach((element:any) => {
      element._centered = false;
      element._expanded = false;
      element._highlighted = false;
    });
    this.chart.render().clearHighlighting();
  }

  createTableChart() {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/data-oracle.csv'
    ).then((data) => {
      this.chart = new OrgChart()
        .nodeContent(function (d: any, i: any, arr: any, state: any) {
          const color = '#FFFFFF';
          const imageDiffVert = 25 + 2;
          return `
                  <div style='width:${d.width
            }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                          <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                              <div style='overflow:scroll;height:100%'>
                                <table>
                                  <tr>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                    <th>column</th>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
                                   <tr>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                    <td>row</td>
                                   </tr>
  
                                </table>
  
                              </div>
  
                          </div>
                      </div>
                              `;
        })
        .container('.chart-container')
        .data(data)
        .render();
    });
  }
}