import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPhoneComponent } from './add-edit-phone.component';

describe('AddEditPhoneComponent', () => {
  let component: AddEditPhoneComponent;
  let fixture: ComponentFixture<AddEditPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
