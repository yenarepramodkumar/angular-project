import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers=[1,3,5,7,9];
  evenNumbers=[2,4,6,8];
  onlyOdd = false;
  constructor() { }

  ngOnInit(): void {
  }

}
