import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewBindPage } from './new-bind.page';

describe('NewBindPage', () => {
  let component: NewBindPage;
  let fixture: ComponentFixture<NewBindPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewBindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
