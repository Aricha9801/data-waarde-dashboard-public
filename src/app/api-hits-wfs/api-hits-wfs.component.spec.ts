import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHitsWfsComponent } from './api-hits-wfs.component';

describe('ApiHitsWfsComponent', () => {
  let component: ApiHitsWfsComponent;
  let fixture: ComponentFixture<ApiHitsWfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHitsWfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiHitsWfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
