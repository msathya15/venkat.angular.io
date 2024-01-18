import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCarConfiguratorComponent } from './advanced-car-configurator.component';

describe('AdvancedCarConfiguratorComponent', () => {
  let component: AdvancedCarConfiguratorComponent;
  let fixture: ComponentFixture<AdvancedCarConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCarConfiguratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedCarConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
