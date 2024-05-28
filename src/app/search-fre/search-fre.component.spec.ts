import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFreComponent } from './search-fre.component';

describe('SearchFreComponent', () => {
  let component: SearchFreComponent;
  let fixture: ComponentFixture<SearchFreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
