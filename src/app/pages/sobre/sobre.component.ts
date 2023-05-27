import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(
      (v) => console.log(v),
      (e) => console.log(e)
  )

    this.activatedRoute.queryParams.subscribe(
      (v) => console.log(v),
      (e) => console.log(e)
    )

    setInterval(() => {
      this.router.navigate(["404"])
    }, 4000)
  }
}
