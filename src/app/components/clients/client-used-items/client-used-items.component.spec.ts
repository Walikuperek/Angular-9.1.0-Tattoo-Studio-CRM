import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUsedItemsComponent } from './client-used-items.component';

describe('ClientUsedItemsComponent', () => {
  let component: ClientUsedItemsComponent;
  let fixture: ComponentFixture<ClientUsedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUsedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUsedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
