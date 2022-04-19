import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialautocompleteComponent } from './materialautocomplete.component';

describe('MaterialautocompleteComponent', () => {
  let component: MaterialautocompleteComponent;
  let fixture: ComponentFixture<MaterialautocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialautocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
