import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LimitsComponent implements OnInit {

  productType: string = '';
  sendCountry: string = '';
  receiveCountry: string = '';
  sendClient: string = '';
  receiveClient: string = '';

  dataList: any[] = [];
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

  addData() {

    if (!this.productType || !this.sendCountry || !this.receiveCountry || !this.sendClient || !this.receiveClient) {
    alert("Please fill all fields");
    return;
    }

    const obj = {
      productType: this.productType,
      sendCountry: this.sendCountry,
      receiveCountry: this.receiveCountry,
      sendClient: this.sendClient,
      receiveClient: this.receiveClient
    };

    // this.dataList.push(obj);

    this.dataList = [...this.dataList, obj];

    console.log(this.dataList);

    this.productType = "";
    this.sendCountry = "";
    this.receiveCountry = "";
    this.sendClient = "";
    this.receiveClient = "";
  }

  clearData() {
  // Reset dropdown values
  this.productType = '';
  this.sendCountry = '';
  this.receiveCountry = '';
  this.sendClient = '';
  this.receiveClient = '';

  // Clear table data (optional)
  this.dataList = [];

  // Optional: Debug log
  console.log('Form cleared');
}
}
