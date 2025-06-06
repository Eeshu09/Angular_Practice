import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipeComponent } from './custompipe.component';

describe('CustompipeComponent', () => {
  let component: CustompipeComponent;
  let fixture: ComponentFixture<CustompipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustompipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustompipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
