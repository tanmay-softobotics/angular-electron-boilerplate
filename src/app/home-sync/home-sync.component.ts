import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sync',
  templateUrl: './home-sync.component.html',
  styleUrls: ['./home-sync.component.scss']
})
export class HomeSyncComponent implements OnInit {
 public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
