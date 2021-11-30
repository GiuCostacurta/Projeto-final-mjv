import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {

  availableDateMenu: Date = new Date('2021-12-03');

  phoneNumber ='(13)98168-2919';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
