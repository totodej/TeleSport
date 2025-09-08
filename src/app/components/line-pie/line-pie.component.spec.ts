import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePieComponent } from './line-pie.component';

describe('LinePieComponent', () => {
  let component: LinePieComponent;
  let fixture: ComponentFixture<LinePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinePieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
