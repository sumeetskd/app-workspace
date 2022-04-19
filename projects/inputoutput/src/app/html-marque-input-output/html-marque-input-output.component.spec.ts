import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMarqueInputOutputComponent } from './html-marque-input-output.component';

describe('HtmlMarqueInputOutputComponent', () => {
  let component: HtmlMarqueInputOutputComponent;
  let fixture: ComponentFixture<HtmlMarqueInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlMarqueInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlMarqueInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
