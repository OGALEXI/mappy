import { Component, OnInit } from '@angular/core';
import { WorldBankService } from '../services/world-bank.service';

@Component({
  selector: 'app-all-countries',
  imports: [],
  templateUrl: './all-countries.component.html',
  styleUrl: './all-countries.component.css'
})
export class AllCountriesComponent implements OnInit {
  countries: any[] = [];
  constructor(private worldBankService: WorldBankService) {}

  ngOnInit(): void {
    this.worldBankService.getAllCountries().subscribe(
      (response) => {
        this.countries = response[1];
      }
    )
  }
}
