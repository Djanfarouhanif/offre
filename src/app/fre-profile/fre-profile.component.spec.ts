import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreProfileComponent } from './fre-profile.component';

describe('FreProfileComponent', () => {
  let component: FreProfileComponent;
  let fixture: ComponentFixture<FreProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
