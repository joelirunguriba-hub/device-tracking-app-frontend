import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDevices } from './manage-devices';

describe('ManageDevices', () => {
  let component: ManageDevices;
  let fixture: ComponentFixture<ManageDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDevices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDevices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
