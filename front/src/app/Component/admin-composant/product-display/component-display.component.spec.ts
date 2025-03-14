import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDisplayComponent } from './component-display.component';

describe('ComponentDisplayComponent', () => {
  let component: ComponentDisplayComponent;
  let fixture: ComponentFixture<ComponentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
