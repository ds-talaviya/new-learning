import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-org-graph',
  templateUrl: './org-graph.component.html',
  styleUrls: ['./org-graph.component.scss']
})
export class OrgGraphComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  data1: TreeNode[] = [{
    label: 'CEO',
    type: 'person',
    styleClass: 'p-person',
    expanded: true,
    data: { name: 'Walter White', 'avatar': 'walter.jpg' },
    children: [
      {
        label: 'CFO',
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
        children: [{
          label: 'Tax',
          styleClass: 'department-cfo'
        },
        {
          label: 'Legal',
          styleClass: 'department-cfo'
        }],
      },
      {
        label: 'COO',
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
        children: [{
          label: 'Operations',
          styleClass: 'department-coo'
        }]
      },
      {
        label: 'CTO',
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
        children: [{
          label: 'Development',
          styleClass: 'department-cto',
          expanded: true,
          children: [{
            label: 'Analysis',
            styleClass: 'department-cto'
          },
          {
            label: 'Front End',
            styleClass: 'department-cto'
          },
          {
            label: 'Back End',
            styleClass: 'department-cto'
          }]
        },
        {
          label: 'QA',
          styleClass: 'department-cto'
        },
        {
          label: 'R&D',
          styleClass: 'department-cto'
        }]
      }
    ]
  }];;

  data2: TreeNode[] = [{
    label: 'F.C Barcelona',
    expanded: true,
    children: [
      {
        label: 'F.C Barcelona',
        // expanded: true,
        children: [
          {
            label: 'Chelsea FC'
          },
          {
            label: 'F.C. Barcelona'
          }
        ]
      },
      {
        label: 'Real Madrid',
        // expanded: true,
        children: [
          {
            label: 'Bayern Munich'
          },
          {
            label: 'Real Madrid'
          }
        ]
      }
    ]
  }];
  data = [
    {
      label: 'CEO',
      children: [
        {
          label: 'CFO',
          children: [
            { label: 'Accounting' },
            { label: 'Treasury' }
          ]
        },
        {
          label: 'COO',
          children: [
            { label: 'Operations' },
            { label: 'Product Development' }
          ]
        },
        {
          label: 'CTO',
          children: [
            { label: 'Software' },
            { label: 'Hardware' }
          ]
        }
      ]
    }
  ]
  selectedNode: TreeNode;

  data3: TreeNode[] = [
    {
      label: 'F.C Barcelona',
      expanded: true,
      children: [
        {
          label: 'Argentina',
          expanded: true,
          children: [
            {
              label: 'Argentina'
            },
            {
              label: 'France'
            }
          ]
        },
        {
          label: 'France',
          expanded: true,
          children: [
            {
              label: 'France'
            },
            {
              label: 'Morocco'
            }
          ]
        }
      ]
    }
  ];
}