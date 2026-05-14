import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receive-limit',
  templateUrl: './receive-limits.component.html',
  styleUrls: ['./receive-limits.component.css'],
  imports: [FormsModule]
})
export class ReceiveLimitComponent implements OnInit {

  // 🔹 Form Model
  form: any = {
    businessPartnerId: null,
    productType: '',
    countryCode: '',
    currencyCode: '',
    minTransactionLimit: null,
    maxTransactionLimit: null,
    isActive: true
  };

  // 🔹 Table Data
  receiveLimits: any[] = [];

  // 🔹 API Base URL
  baseUrl = 'http://localhost:8080/api/receive-limits';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllReceiveLimits();
  }

  // ✅ GET all records
  getAllReceiveLimits() {
    this.http.get<any[]>(`${this.baseUrl}`)
      .subscribe({
        next: (res) => {
          this.receiveLimits = res;
        },
        error: (err) => {
          console.error('Error fetching receive limits', err);
        }
      });
  }

  // ✅ SAVE
  save() {

    // 🔴 Validation
    if (!this.form.productType || !this.form.countryCode) {
      alert('Please fill required fields');
      return;
    }

    if (this.form.minTransactionLimit > this.form.maxTransactionLimit) {
      alert('Min limit cannot be greater than Max limit');
      return;
    }

    this.http.post(`${this.baseUrl}`, this.form)
      .subscribe({
        next: () => {
          alert('Saved successfully');
          this.resetForm();
          this.getAllReceiveLimits();
        },
        error: (err) => {
          console.error('Error saving receive limit', err);
        }
      });
  }

  // ✅ RESET
  resetForm() {
    this.form = {
      businessPartnerId: null,
      productType: '',
      countryCode: '',
      currencyCode: '',
      minTransactionLimit: null,
      maxTransactionLimit: null,
      isActive: true
    };
  }

  // ✅ EDIT
  edit(item: any) {
    this.form = { ...item };
  }

  // ✅ DELETE
  delete(id: number) {
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(() => {
        alert('Deleted successfully');
        this.getAllReceiveLimits();
      });
  }
}