import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailleComponent } from './post-detaille.component';

describe('PostDetailleComponent', () => {
  let component: PostDetailleComponent;
  let fixture: ComponentFixture<PostDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
