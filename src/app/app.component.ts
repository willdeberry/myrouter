import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'myrouter';
    info;
    devices;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.getInfo().subscribe(
            data => { this.info = data },
            err => console.error(err),
            () => console.log('done loading info')
        );

        this.getConnectedDevices().subscribe(
            data => { this.devices = data },
            err => console.error(err),
            () => console.log('done loading attachaed devices')
        );
    }

    getInfo() {
        return this.http.get('/api/getInfo')
    }

    getConnectedDevices() {
        return this.http.get('/api/getAttachedDevices')
    }

    allowBlockDevice(device, action) {
        return this.http.post('/api/allowBlockDevice', {"action": action, "device": device}).subscribe(
            res => console.log(res)
        );
    }
}
