import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
  closeDialog(): void {
    
    this.dialogRef.close();
  }
}
