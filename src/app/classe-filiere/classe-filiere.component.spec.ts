import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseFiliereComponent } from './classe-filiere.component';

describe('ClasseFiliereComponent', () => {
  let component: ClasseFiliereComponent;
  let fixture: ComponentFixture<ClasseFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
