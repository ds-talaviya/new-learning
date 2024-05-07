import { Component, OnInit } from '@angular/core';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';
@Component({
  selector: 'app-org-graph',
  templateUrl: './org-graph.component.html',
  styleUrls: ['./org-graph.component.scss']
})
export class OrgGraphComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    var chart;
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((dataFlattened) => {
      console.log(JSON.stringify(dataFlattened))
      chart = new OrgChart()
        .container('.chart-container')
        .data([
          {
            "name": "Gurukrupa",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Company",
            "id": "#",
            "parentId": ""
          },
          {
            "name": "1.1 - Sanajy Gajjar (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 57,
            "parentId": "#"
          },
          {
            "name": "Sanjay Natvarbhai Gajjar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 2156,
            "parentId": 57
          },
          {
            "name": "Dhaval Makwana",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 2205,
            "parentId": 57
          },
          {
            "name": "Akshay Pandya",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 3691,
            "parentId": 57
          },
          {
            "name": "Saijibhai Desai",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 3736,
            "parentId": 57
          },
          {
            "name": "Sagar Taviyad",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 3798,
            "parentId": 57
          },
          {
            "name": "Yash Suthar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4103,
            "parentId": 57
          },
          {
            "name": "Kalpesh Panchal",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4192,
            "parentId": 57
          },
          {
            "name": "Dhruv Patel",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4239,
            "parentId": 57
          },
          {
            "name": "Rajan Shergill",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4240,
            "parentId": 57
          },
          {
            "name": "1.10 - Mayur Chauhan (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 266,
            "parentId": "#"
          },
          {
            "name": "Sourav Dangi",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5716,
            "parentId": 266
          },
          {
            "name": "Mayursingh Chauhan",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 5732,
            "parentId": 266
          },
          {
            "name": "Dhaval Kori",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5744,
            "parentId": 266
          },
          {
            "name": "Pritee Rajput",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5776,
            "parentId": 266
          },
          {
            "name": "Abhishek Vaghela",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5777,
            "parentId": 266
          },
          {
            "name": "Amit Shah",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6058,
            "parentId": 266
          },
          {
            "name": "Alpesh Thakkar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6129,
            "parentId": 266
          },
          {
            "name": "Vinita Rawal",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6604,
            "parentId": 266
          },
          {
            "name": "Anuj Chaudhary",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Manager",
            "id": 2938,
            "parentId": "#"
          },
          {
            "name": "1.11- Khushali Nagori (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 302,
            "parentId": 2938
          },
          {
            "name": "Heli Desai",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5805,
            "parentId": 302
          },
          {
            "name": "Khushali Nagori",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 6309,
            "parentId": 302
          },
          {
            "name": "Nikhil Desai",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6311,
            "parentId": 302
          },
          {
            "name": "Sohin Dhandhukia",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6517,
            "parentId": 302
          },
          {
            "name": "Yogita",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6656,
            "parentId": 302
          },
          {
            "name": "1.12- Nilesh Dhuppad (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 330,
            "parentId": "#"
          },
          {
            "name": "Nilesh Dhuppad ",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 6573,
            "parentId": 330
          },
          {
            "name": "Mamta Rathod",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6711,
            "parentId": 330
          },
          {
            "name": "Manojsingh Tomar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6712,
            "parentId": 330
          },
          {
            "name": "Pramodkumar Sankhala",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6713,
            "parentId": 330
          },
          {
            "name": "Sandip Soni",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6714,
            "parentId": 330
          },
          {
            "name": "1.2 - Ronak Vaghela (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 59,
            "parentId": "#"
          },
          {
            "name": "Ronak Vaghela",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 2157,
            "parentId": 59
          },
          {
            "name": "1.3 - Brijesh Vora (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 139,
            "parentId": 2938
          },
          {
            "name": "Sheel Jignesh Shah",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 2166,
            "parentId": 139
          },
          {
            "name": "Brijeshkumar Vora",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 3320,
            "parentId": 139
          },
          {
            "name": "Dhavalsinh Vaghela",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4194,
            "parentId": 139
          },
          {
            "name": "Pruthvisinh Chavda",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4786,
            "parentId": 139
          },
          {
            "name": "Chetan Gohel",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4798,
            "parentId": 139
          },
          {
            "name": "Rilex Roy",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5469,
            "parentId": 139
          },
          {
            "name": "Vaidikkumar Patel",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5715,
            "parentId": 139
          },
          {
            "name": "Mittal Purohit",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5864,
            "parentId": 139
          },
          {
            "name": "1.5 - Abhishek Thakkar (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 166,
            "parentId": "#"
          },
          {
            "name": "Mukesh Singadiya",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 3828,
            "parentId": 166
          },
          {
            "name": "Abhishek Thakkar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 4020,
            "parentId": 166
          },
          {
            "name": "Abhishek Pithva",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4036,
            "parentId": 166
          },
          {
            "name": "Prachi Agrawal",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 4104,
            "parentId": 166
          },
          {
            "name": "Rabina Chhetri",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5446,
            "parentId": 166
          },
          {
            "name": "Prashant Dharmendra Jethva",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6606,
            "parentId": 166
          },
          {
            "name": "1.9 Landkart (Ahmedabad)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 238,
            "parentId": "#"
          },
          {
            "name": "Divyanshi Aggarwal",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 5142,
            "parentId": 238
          },
          {
            "name": "Snigdh Saklani",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Manager",
            "id": 5173,
            "parentId": "#"
          },
          {
            "name": "2.1 - Vishal Yadav (Mumbai)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 293,
            "parentId": 5173
          },
          {
            "name": "Purvesh Brahmbhatt",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5175,
            "parentId": 293
          },
          {
            "name": "Vishal Yadav",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 5208,
            "parentId": 293
          },
          {
            "name": "Piyush Parmar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5212,
            "parentId": 293
          },
          {
            "name": "Chandresh Rai",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5471,
            "parentId": 293
          },
          {
            "name": "2.2 - Shubham Kumar Jaiswal (Mumbai)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 292,
            "parentId": 5173
          },
          {
            "name": "Rohit Mahida",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5176,
            "parentId": 292
          },
          {
            "name": "Asiya Khan",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5200,
            "parentId": 292
          },
          {
            "name": "Shubham Kumar Jaiswal",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 5205,
            "parentId": 292
          },
          {
            "name": "Arnold Dmello",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5209,
            "parentId": 292
          },
          {
            "name": "Saniya Khan",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6673,
            "parentId": 292
          },
          {
            "name": "2.3 - Roshan Pandey (Mumbai)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 294,
            "parentId": 5173
          },
          {
            "name": "Vijay Kamble",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5213,
            "parentId": 294
          },
          {
            "name": "Roshan Pandey",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 5593,
            "parentId": 294
          },
          {
            "name": "IBAD SHAIKH",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5710,
            "parentId": 294
          },
          {
            "name": "Randhir Biswas",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5711,
            "parentId": 294
          },
          {
            "name": "Neha khalfe",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5712,
            "parentId": 294
          },
          {
            "name": "Praful Gupta",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5713,
            "parentId": 294
          },
          {
            "name": "Vinit Pandey",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5714,
            "parentId": 294
          },
          {
            "name": "Amruta Nikam ",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6652,
            "parentId": 294
          },
          {
            "name": "Holash Pareek",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6655,
            "parentId": 294
          },
          {
            "name": "Ashish Tiwari",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6672,
            "parentId": 294
          },
          {
            "name": "2.4 - Sagar Shinde (Mumbai)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 240,
            "parentId": 5173
          },
          {
            "name": "Neha Shaikh",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5859,
            "parentId": 240
          },
          {
            "name": "Subhash Chandra",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5860,
            "parentId": 240
          },
          {
            "name": "Akash Susvirkar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5862,
            "parentId": 240
          },
          {
            "name": "Sagar Shinde",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 5863,
            "parentId": 240
          },
          {
            "name": "Muskan Lulla",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6653,
            "parentId": 240
          },
          {
            "name": "Rohan Ramesh Mandavkar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6654,
            "parentId": 240
          },
          {
            "name": "2.5 - Krishna Kumar Tiwari (Mumbai)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 325,
            "parentId": "#"
          },
          {
            "name": "Sudha Asari",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5207,
            "parentId": 325
          },
          {
            "name": "Ashish Yadav",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5261,
            "parentId": 325
          },
          {
            "name": "Goldi Singh",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5588,
            "parentId": 325
          },
          {
            "name": "Anjali Gavai",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 5947,
            "parentId": 325
          },
          {
            "name": "Krishna Kumar ",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 6542,
            "parentId": 325
          },
          {
            "name": "Pawan Ashok Dubey",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6644,
            "parentId": 325
          },
          {
            "name": "Purnakumar Bansode",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6645,
            "parentId": 325
          },
          {
            "name": "Surajkumar Surendra Yadav",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6646,
            "parentId": 325
          },
          {
            "name": "3.1- Santosh Gujar (Pune)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 326,
            "parentId": "#"
          },
          {
            "name": "Swapnil Dhumal",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6408,
            "parentId": 326
          },
          {
            "name": "Santosh Gujar",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 6419,
            "parentId": 326
          },
          {
            "name": "Kamlesh Patil",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6452,
            "parentId": 326
          },
          {
            "name": "Nivrutti Saindane",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6454,
            "parentId": 326
          },
          {
            "name": "Rohit Waghmare",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6455,
            "parentId": 326
          },
          {
            "name": "Akhil Ashokrao Sarnaik",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6565,
            "parentId": 326
          },
          {
            "name": "Yashvant Vilasrao Deshmukh",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6566,
            "parentId": 326
          },
          {
            "name": "3.2- Sachin Yadav (Pune)",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team",
            "id": 327,
            "parentId": "#"
          },
          {
            "name": "PV Abhishek",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6407,
            "parentId": 327
          },
          {
            "name": "Abhay Dwivedi",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6409,
            "parentId": 327
          },
          {
            "name": "Ganesh Jadhav",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6410,
            "parentId": 327
          },
          {
            "name": "Nitish Dede",
            "imageUrl": "https: //raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6456,
            "parentId": 327
          },
          {
            "name": "Sachin Yadav",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "Team Lead",
            "id": 6489,
            "parentId": 327
          },
          {
            "name": "Arjun Chemate",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6568,
            "parentId": 327
          },
          {
            "name": "Rushikesh Ghule",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6590,
            "parentId": 327
          },
          {
            "name": "Nishant Singh",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6591,
            "parentId": 327
          },
          {
            "name": "Sunny Singh",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6592,
            "parentId": 327
          },
          {
            "name": "Abhijit Nikam",
            "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
            "positionName": "",
            "id": 6607,
            "parentId": 327
          }
        ])
        .nodeHeight((d) => 85)
        .nodeWidth((d) => {
          return 220;
        })
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 25)
        .compactMarginPair((d) => 50)
        .neightbourMargin((a, b) => 25)
        .siblingsMargin((d) => 25)
        // .buttonContent(({ node:any, state }) => {
        //   return `<div style="px;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
        //     node.children
        //       ? `<i class="fas fa-angle-up"></i>`
        //       : `<i class="fas fa-angle-down"></i>`
        //   }</span> ${node.data._directSubordinates}  </div>`;
        // })
        // .linkUpdate(function (d, i, arr) {
        //   d3.select(this)
        //     .attr('stroke', (d) =>
        //       d.data._upToTheRootHighlighted ? '#152785' : '#E4E2E9'
        //     )
        //     .attr('stroke-width', (d) =>
        //       d.data._upToTheRootHighlighted ? 5 : 1
        //     );

        //   if (d.data._upToTheRootHighlighted) {
        //     d3.select(this).raise();
        //   }
        // })
        .nodeContent(function (d: any, i, arr, state) {
          const color = '#FFFFFF';
          return `
          <div style="font-family: 'Inter', sans-serif;background-color:${color}; position:absolute;margin-top:-1px; margin-left:-1px;width:${d.width}px;height:${d.height}px;border-radius:10px;border: 1px solid #E4E2E9">
             <div style="background-color:${color};position:absolute;margin-top:-25px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
             <img src=" ${d.data.imageUrl
            }" style="position:absolute;margin-top:-20px;margin-left:${20}px;border-radius:100px;width:40px;height:40px;" />
             
            <div style="color:#08011E;position:absolute;right:20px;top:17px;font-size:10px;"><i class="fas fa-ellipsis-h"></i></div>

            <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:32px"> ${d.data.name
            } </div>
            <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${d.data.positionName
            } </div>


         </div>
`;
        })
        .render();
    });
  }
}