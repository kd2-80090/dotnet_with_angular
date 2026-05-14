import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-limits',
  templateUrl: './search-limits.component.html',
  styleUrls: ['./search-limits.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class SearchLimitsComponent implements OnInit {

  productType: string = "";
  constructor() { }

  ngOnInit() {
  }

  getProductType() {

  }

  getSendCountry() {

  }

  getReceiveCountry() {

  }

  getSendClient() {
    
  }

  getReceiveClient() {

  }
}
