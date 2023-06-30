import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BindsPage } from './binds.page';

describe('BindsPage', () => {
  let component: BindsPage;
  let fixture: ComponentFixture<BindsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BindsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
