import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  ngOnInit(): void {
    console.table(this.pokemonList);
  }
  selectPokemon(pokimonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id === +pokimonId
    );
    if (pokemon) {
      console.log(`Vous avez demander le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demander le pokemon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
