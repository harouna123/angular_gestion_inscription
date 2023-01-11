import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliereDepartementComponent } from './filiere-departement.component';

describe('FiliereDepartementComponent', () => {
  let component: FiliereDepartementComponent;
  let fixture: ComponentFixture<FiliereDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliereDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliereDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
