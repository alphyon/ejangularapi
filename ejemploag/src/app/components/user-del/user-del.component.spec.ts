import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDelComponent } from './user-del.component';

describe('UserDelComponent', () => {
  let component: UserDelComponent;
  let fixture: ComponentFixture<UserDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
