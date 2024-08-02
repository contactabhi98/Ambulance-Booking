import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {

  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      customerDetails: this.fb.group({
        mobileNumber: ['', Validators.required],
        customerName: ['', Validators.required],
        patientName: [''],
      }),
      addressDetails: this.fb.group({
        address: ['', Validators.required],
        pickupLocation: ['', Validators.required],
        dropLocation: ['', Validators.required],
        pickupLatitude: [''],
        pickupLongitude: [''],
        dropLatitude: [''],
        dropLongitude: [''],
        bookingReason: [''],
        remarks: [''],
      }),
      ambulanceDetails: this.fb.group({
        ambulance: [''],
        travelDistance: [''],
        driverName: [''],
        driverMobileNumber: [''],
        cancelRemarks: [''],
      }),
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value); // This will log the form data to the console
      // Add your save logic here
    } else {
      console.error('Form is invalid');
    }
  }
  
  onClear() {
    this.bookingForm.reset();
  }
  
  onClose() {
    // Implement close functionality here
  }
}
