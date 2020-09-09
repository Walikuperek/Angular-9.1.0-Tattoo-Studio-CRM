import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrdersRegularityChartComponent } from './client-orders-regularity-chart.component';

describe('ClientOrdersRegularityChartComponent', () => {
  let component: ClientOrdersRegularityChartComponent;
  let fixture: ComponentFixture<ClientOrdersRegularityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrdersRegularityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrdersRegularityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
