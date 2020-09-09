import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPathComponent } from './location-path.component';

describe('LocationPathComponent', () => {
  let component: LocationPathComponent;
  let fixture: ComponentFixture<LocationPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
