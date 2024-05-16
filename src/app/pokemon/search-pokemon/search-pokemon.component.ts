import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
})
export class SearchPokemonComponent implements OnInit {
  searchTerm = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(private router: Router, private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemons$ = this.searchTerm.pipe(
      // {...."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      // {......"ab"..........."abc"......}
      switchMap((term) => this.pokemonService.searchPokemon(term))
    );
  }
  search(term: string) {
    this.searchTerm.next(term);
  }
  goToDetail(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
