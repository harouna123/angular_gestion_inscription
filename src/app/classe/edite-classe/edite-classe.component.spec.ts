import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeClasseComponent } from './edite-classe.component';

describe('EditeClasseComponent', () => {
  let component: EditeClasseComponent;
  let fixture: ComponentFixture<EditeClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
