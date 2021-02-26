import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectVenderRequestComponent } from './direct-vender-request.component';

describe('DirectVenderRequestComponent', () => {
  let component: DirectVenderRequestComponent;
  let fixture: ComponentFixture<DirectVenderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectVenderRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectVenderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
