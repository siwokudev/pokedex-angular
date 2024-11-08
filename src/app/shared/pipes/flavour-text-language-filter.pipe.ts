import { Pipe, PipeTransform } from '@angular/core';
import { FlavorText } from '../interfaces/pokeApi';

@Pipe({
  name: 'flavourTextLanguage',
  standalone: true
})
export class FlavourTextLanguageFilterPipe implements PipeTransform {

  transform(flavor_text_entries: FlavorText[], language: string): string {
    if (!flavor_text_entries || !language) {
      console.log("no language");
      return "no description";
    }
    return flavor_text_entries.filter(text => language === text.language.name)[0].flavor_text.replace(""," ");
  }

}
