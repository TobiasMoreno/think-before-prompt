import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaHeadersComponent } from './ia-headers.component';

describe('IaHeadersComponent', () => {
  let component: IaHeadersComponent;
  let fixture: ComponentFixture<IaHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaHeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
