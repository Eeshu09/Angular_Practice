import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdecoratorsComponent } from './inputdecorators.component';

describe('InputdecoratorsComponent', () => {
  let component: InputdecoratorsComponent;
  let fixture: ComponentFixture<InputdecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputdecoratorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputdecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
