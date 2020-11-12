import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfracaoPage } from './infracao.page';

describe('InfracaoPage', () => {
  let component: InfracaoPage;
  let fixture: ComponentFixture<InfracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfracaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
