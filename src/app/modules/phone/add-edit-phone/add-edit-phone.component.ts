import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/models/phone.model';

@Component({
  selector: 'app-add-edit-phone',
  templateUrl: './add-edit-phone.component.html',
  styleUrls: ['./add-edit-phone.component.scss'],
})
export class AddEditPhoneComponent implements OnChanges {
  @Input() phone: Phone = {
    cardName: '',
    version: '',
    contact: '',
  };

  @Output() public onSave: EventEmitter<any> = new EventEmitter();
  @Output() public onEdit: EventEmitter<any> = new EventEmitter();
  @Output() public onCancel: EventEmitter<any> = new EventEmitter();


  public isLoading: boolean = true;
  public phoneForm: FormGroup;
  public isEdit: boolean = false;

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      cardName: ['', [Validators.required]],
      version: ['', [Validators.required, Validators.pattern('')]],
      contact: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['phone'] && changes['phone'].currentValue && changes['phone'].currentValue.version) {
      this.phone = changes['phone'].currentValue;
      this.phoneForm.patchValue(this.phone);
      this.isEdit = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

  get f() {
    return this.phoneForm.controls;
  }
  cancel() {
    this.phoneForm.reset();
    this.isEdit = false;
    this.onCancel.emit();
  }

  save() {
    this.isLoading = true;
    if (this.isEdit) {
      this.onEdit.emit(this.phoneForm.value);
    } else {
      this.onSave.emit(this.phoneForm.value);
    }
    this.phoneForm.reset();
    this.isEdit = false;
  }
}
