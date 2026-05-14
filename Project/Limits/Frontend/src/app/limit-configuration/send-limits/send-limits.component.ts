import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-limit',
  templateUrl: './send-limits.component.html',
  styleUrls: ['./send-limits.component.css'],
  imports: [FormsModule]
})
export class SendLimitComponent implements OnInit {

  // 🔹 Form Model
  form: any = {
    businessPartnerId: null,
    productType: '',
    sendCountryCode: '',
    sendCurrencyCode: '',
    receiveCountryCode: '',
    receiveCurrencyCode: '',
    minTransactionLimit: null,
    maxTransactionLimit: null,
    isActive: true
  };

  // 🔹 Table Data
  sendLimits: any[] = [];

  // 🔹 API Base URL
  baseUrl = 'http://localhost:8080/api/send-limits';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllSendLimits();
  }

  // ✅ GET all records
  getAllSendLimits() {
    this.http.get<any[]>(`${this.baseUrl}`)
      .subscribe({
        next: (res) => {
          this.sendLimits = res;
        },
        error: (err) => {
          console.error('Error fetching send limits', err);
        }
      });
  }

  // ✅ SAVE (Create)
  save() {

    // 🔴 Validation
    if (!this.form.productType || !this.form.sendCountryCode) {
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
          this.getAllSendLimits();
        },
        error: (err) => {
          console.error('Error saving send limit', err);
        }
      });
  }

  // ✅ RESET FORM
  resetForm() {
    this.form = {
      businessPartnerId: null,
      productType: '',
      sendCountryCode: '',
      sendCurrencyCode: '',
      receiveCountryCode: '',
      receiveCurrencyCode: '',
      minTransactionLimit: null,
      maxTransactionLimit: null,
      isActive: true
    };
  }

  // ✅ EDIT (optional)
  edit(item: any) {
    this.form = { ...item };
  }

  // ✅ DELETE (optional)
  delete(id: number) {
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(() => {
        alert('Deleted successfully');
        this.getAllSendLimits();
      });
  }
}