import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  constructor(private countrieServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.countrieServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
