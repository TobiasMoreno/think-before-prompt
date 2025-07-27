import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparativeCardsComponent } from './comparative-cards.component';

describe('ComparativeCardsComponent', () => {
  let component: ComparativeCardsComponent;
  let fixture: ComponentFixture<ComparativeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
