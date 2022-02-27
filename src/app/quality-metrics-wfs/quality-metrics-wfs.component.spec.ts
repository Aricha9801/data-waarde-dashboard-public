import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityMetricsWfsComponent } from './quality-metrics-wfs.component';

describe('QualityMetricsWfsComponent', () => {
  let component: QualityMetricsWfsComponent;
  let fixture: ComponentFixture<QualityMetricsWfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityMetricsWfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityMetricsWfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
