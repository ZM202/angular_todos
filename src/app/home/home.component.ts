import {Component, OnInit} from '@angular/core';
import {HomeService} from "../services/home.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _services:HomeService) {
  }
  healthNewsDisplay: any =[];

  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{
      console.log(result);
      this.healthNewsDisplay = result.articles;
    })
  }

}
