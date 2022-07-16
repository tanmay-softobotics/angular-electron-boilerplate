import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSyncComponent } from './home-sync.component';

describe('HomeSyncComponent', () => {
  let component: HomeSyncComponent;
  let fixture: ComponentFixture<HomeSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
