import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

@Component({
  providers: [HeroService],
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  private heroes: Hero[];
  private heroService: HeroService;

  ngOnInit(): void {
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }
}

