import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassCommunicationComponent } from './mass-communication.component';

describe('MassCommunicationComponent', () => {
  let component: MassCommunicationComponent;
  let fixture: ComponentFixture<MassCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
