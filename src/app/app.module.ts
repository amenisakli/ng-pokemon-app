import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./border-card.directive";
import { TitleCardDirective } from "./title-card.directive";
import { SizeImgDirective } from './size-img.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, BorderCardDirective, TitleCardDirective, SizeImgDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
