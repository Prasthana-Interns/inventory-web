import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  changecolor(){
    console.log("asdfghjk");
    // this.router.navigate(['add-device'])
  }
}
