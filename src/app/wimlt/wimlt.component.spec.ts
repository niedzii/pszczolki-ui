import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WimltComponent } from './wimlt.component';

describe('WimltComponent', () => {
  let component: WimltComponent;
  let fixture: ComponentFixture<WimltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WimltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WimltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
