import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { AfterViewInit, Component, inject, Input} from '@angular/core';

import { PokeApiService } from '../../shared/services/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [NgOptimizedImage, TitleCasePipe],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent implements AfterViewInit {
  pokeApiService = inject(PokeApiService)
  router = inject(Router)

  constructor() {}

  @Input() text : string = "Catching Some pokemon";
  @Input() id : number = 0;
  @Input() imgUrl : string = "";

  mouseOver : boolean = false

  ngAfterViewInit(): void {
    if (this.id < 1){
      return;
    }

    this.pokeApiService.getPokemon(this.id).subscribe(data => {
      this.imgUrl = data.sprites.front_default
    });
  }

  onClick() {
    console.log("navigate to: /details/ " + this.id);
    this.router.navigate(["/details/" + this.id]);
  }
}
