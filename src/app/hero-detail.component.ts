import {Component, OnInit} from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
  providers: [HeroService],
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})


export class HeroDetailComponent implements OnInit {

  private heroService: HeroService;
  private route: ActivatedRoute;
  private location: Location;

  hero: Hero;

  constructor(heroService: HeroService, route: ActivatedRoute, location: Location) {
    this.heroService = heroService;
    this.route = route;
    this.location = location;
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}
