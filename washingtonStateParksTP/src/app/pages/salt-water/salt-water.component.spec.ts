import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltWaterComponent } from './salt-water.component';

describe('SaltWaterComponent', () => {
  let component: SaltWaterComponent;
  let fixture: ComponentFixture<SaltWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaltWaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaltWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
