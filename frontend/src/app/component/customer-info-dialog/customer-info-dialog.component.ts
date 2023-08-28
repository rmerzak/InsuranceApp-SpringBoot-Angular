
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-customer-info-dialog',
  templateUrl: './customer-info-dialog.component.html',
  styleUrls: ['./customer-info-dialog.component.css']
})
export class CustomerInfoDialogComponent {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<CustomerInfoDialogComponent>) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
  }

  closepopup() {
    this.ref.close();
  }
}
