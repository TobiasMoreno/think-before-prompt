import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McpsComponent } from './mcps.component';

describe('McpsComponent', () => {
  let component: McpsComponent;
  let fixture: ComponentFixture<McpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
