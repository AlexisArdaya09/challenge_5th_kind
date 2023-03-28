import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhoneComponent } from './list-phone.component';

describe('ListPhoneComponent', () => {
  let component: ListPhoneComponent;
  let fixture: ComponentFixture<ListPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
