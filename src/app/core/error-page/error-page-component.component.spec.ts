import { CoreModule } from './../core.module';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ErrorPageComponent } from '@app/core/error-page/error-page-component.component';
import { Router } from '@angular/router';
import { routes } from '@app/core/app-routing/app-routing.module';

describe('ErrorPageComponentComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;
  let location: Location;
  let router: Router;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule.withRoutes(routes), CoreModule],
      providers: [Location]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to \'dashboard\'  when home button clicked', async(() => {

    const homeButton = fixture.debugElement.nativeElement.querySelector('button');
    homeButton.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));

  it('should render the image', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div >img').src).toContain('assets/images/404.gif');
  }));

});
