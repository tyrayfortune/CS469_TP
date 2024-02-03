import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountRainierComponent } from './mount-rainier.component';

describe('MountRainierComponent', () => {
  let component: MountRainierComponent;
  let fixture: ComponentFixture<MountRainierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountRainierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MountRainierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
