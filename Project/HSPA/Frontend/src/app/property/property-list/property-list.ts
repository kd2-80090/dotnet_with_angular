import { Component, OnInit } from '@angular/core';
import { PropertyCard } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing';
import { Property } from '../../models/property';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCard, CommonModule],
  templateUrl: './property-list.html',
  styleUrl: './property-list.css',
  standalone: true
})
export class PropertyList implements OnInit {

  SellRent=1;
  // properties$!: Observable<Property[]>;
    properties: Array<IProperty>= [];

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
      // this.properties$ = this.housingService.GetAllProperties();
      // this.properties = this.housingService.GetAllProperties();

    this.housingService.GetAllProperties(this.SellRent).subscribe(
      data => {
        console.log('API DATA:', data);
        this.properties = data || [];
        console.log('ASSIGNED:', this.properties);
        console.log(this.route.snapshot.url.toString())
        this.cd.detectChanges(); // ✅ FORCE UI UPDATE

      },
      error =>
      {
        console.log(error);
      }
    );
    // this.http.get<any[]>('data/properties.json').subscribe(
    //   data => {
    //     console.log('API DATA:', data);
    //     this.properties = data;
    //     console.log('ASSIGNED:', this.properties);
    //   },
    //   error => console.error('JSON load error:', error)

    // );
  }

  // trackById(index: number, item: Property) {
  trackById(index: number, item: any) {
    return item.Id;
  }
}
