import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WorldBankService } from '../services/world-bank.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent implements OnInit {
  selectedCountry: any = null;

  @ViewChild('svgMap') svgMap: ElementRef | undefined;

  constructor(private worldBankService: WorldBankService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const svgElement = document.getElementById('svgMap') as HTMLObjectElement;

    svgElement?.addEventListener('load', () => {
      const svgDoc = svgElement.contentDocument;
      if (svgDoc) {
        svgDoc.querySelectorAll('.country').forEach((country: any) => {
          country.addEventListener('click', (event: Event) => {
            const countryId = (event.target as HTMLElement).id;
            this.onCountryClick(countryId);
          });
        });
      }
    });
   } 
  }

  onCountryClick(countryCode: string): void {
    this.worldBankService.getCountryData(countryCode).subscribe(
      (countryData) => {
        this.selectedCountry = countryData[1][0]
        this.cdr.detectChanges();
      }
    )
  }
  // Part G here
}
