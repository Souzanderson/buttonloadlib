import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonldComponent } from './buttonld.component';

describe('ButtonldComponent', () => {
  let component: ButtonldComponent;
  let fixture: ComponentFixture<ButtonldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
