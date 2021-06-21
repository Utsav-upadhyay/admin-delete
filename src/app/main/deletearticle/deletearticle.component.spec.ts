import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletearticleComponent } from './deletearticle.component';

describe('DeletearticleComponent', () => {
  let component: DeletearticleComponent;
  let fixture: ComponentFixture<DeletearticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletearticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
