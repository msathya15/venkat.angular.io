import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCarConfiguratorComponent } from './basic-car-configurator.component';

describe('BasicCarConfiguratorComponent', () => {
  let component: BasicCarConfiguratorComponent;
  let fixture: ComponentFixture<BasicCarConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCarConfiguratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCarConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
