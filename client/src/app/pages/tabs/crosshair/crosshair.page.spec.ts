import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrosshairPage } from './crosshair.page';

describe('CrosshairPage', () => {
  let component: CrosshairPage;
  let fixture: ComponentFixture<CrosshairPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrosshairPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrosshairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
