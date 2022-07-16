import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncFileComponent } from './sync-file.component';

describe('SyncFileComponent', () => {
  let component: SyncFileComponent;
  let fixture: ComponentFixture<SyncFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
