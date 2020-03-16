import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsListingPage } from './events-listing.page';

describe('EventsListingPage', () => {
  let component: EventsListingPage;
  let fixture: ComponentFixture<EventsListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
