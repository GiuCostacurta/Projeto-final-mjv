import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialPageComponent } from './inicial-page.component';

describe('InicialPageComponent', () => {
  let component: InicialPageComponent;
  let fixture: ComponentFixture<InicialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
