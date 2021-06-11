import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.css'],
})
export class ComponentNavComponent implements OnInit {
  blogSideLinks = [
    {
      id: 1,
      name: 'JavaScript',
      imgFile: '../../../../assets/img/javascript-js-seeklogo.com.svg',
    },
    {
      id: 2,
      name: 'Angular',
      imgFile: '../../../../assets/img/angular-seeklogo.com.svg',
    },
    {
      id: 3,
      name: 'CSS',
      imgFile: '../../../../assets/img/css3-seeklogo.com.svg',
    },
    {
      id: 4,
      name: 'Angular Material',
      imgFile: '../../../../assets/img/material-ui-seeklogo.com.svg',
    },
    {
      id: 5,
      name: 'Typescript',
      imgFile: '../../../../assets/img/typescript-seeklogo.com.svg',
    },
    {
      id: 6,
      name: 'Quick Reference',
      imgFile: '../../../../assets/img/angular-seeklogo.com.svg',
    },
  ];
  resumeSideLinks = [
    { id: 2, name: 'Resume ' },
    { id: 1, name: 'Resume ' },
    { id: 3, name: 'Resume ' },
    { id: 4, name: 'Resume ' },
    { id: 5, name: 'Resume ' },
    { id: 6, name: 'Resume ' },
  ];
  portfolioSideLinks = [
    { id: 1, name: 'Portfolio' },
    { id: 2, name: 'Portfolio' },
    { id: 3, name: 'Portfolio' },
    { id: 4, name: 'Portfolio' },
    { id: 5, name: 'Portfolio' },
    { id: 6, name: 'Portfolio' },
  ];

  path = '';
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((val) => {
      this.path = this.location.path();
    });
  }

  ngOnInit(): void {}
}
