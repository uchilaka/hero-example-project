import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

/**
 * The root level of your test spec. ALL of your tests MUST be within this
 * describe block
 *
 * PS: if you want to run your tests but only execute a specific describe, put
 * an "f" in front of it (think "f" for "focus") i.e. fdescribe
 */
describe('HeroesComponent', () => {
  // This is where your component is getting mocked
  let component: HeroesComponent;
  // This gives you a resource for interacting with your test DOM
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    // Build your test module to make sure your component has all its dependencies
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component.hero prop exists', () => {
    const heroPropExists = Object.prototype.hasOwnProperty.call(component, 'hero');
    expect(heroPropExists).toBeTruthy();
  });

});
