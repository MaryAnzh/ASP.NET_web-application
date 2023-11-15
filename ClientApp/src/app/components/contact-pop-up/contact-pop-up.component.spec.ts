import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPopUpComponent } from './contact-pop-up.component';

describe('ContactPopUpComponent', () => {
  let component: ContactPopUpComponent;
  let fixture: ComponentFixture<ContactPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
