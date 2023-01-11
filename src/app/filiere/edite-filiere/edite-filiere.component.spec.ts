import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeFiliereComponent } from './edite-filiere.component';

describe('EditeFiliereComponent', () => {
  let component: EditeFiliereComponent;
  let fixture: ComponentFixture<EditeFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
