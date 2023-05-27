import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(
      (res) => console.log(res),
      (e) => console.log(e)
  )

    this.activatedRoute.queryParams.subscribe(
      (res) => console.log(res),
      (e) => console.log(e)
    )
  }
}
