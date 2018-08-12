import { Component, OnInit } from '@angular/core';
import { NetgearRouter } from 'netgear';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'myrouter';

    constructor(
        private router: NetgearRouter
    ) {}

    ngOnInit() {
        console.log('ngOnInit');
    }
}
