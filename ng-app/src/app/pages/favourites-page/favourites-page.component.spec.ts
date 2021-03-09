import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesPageComponent } from './favourites-page.component';

describe('FavouritesPageComponent', () => {
  let component: FavouritesPageComponent;
  let fixture: ComponentFixture<FavouritesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
