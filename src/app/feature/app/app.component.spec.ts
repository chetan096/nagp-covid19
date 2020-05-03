import { ErrorPageComponent } from './../../core/error-page/error-page-component.component';
import { CoreModule } from './../../core/core.module';
import {HttpClientTestingModule} from '@angular/common/http/testing/testing';
import { TestBed, async, tick, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '@app/core/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let fixture: AppComponent;
  let errorComponent: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        ErrorPageComponent
      ],
      providers: [Location]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    errorComponent = TestBed.createComponent(ErrorPageComponent);
    // initialize location listener
    router.initialNavigation();
  }));

  it('navigate to \'\' redirects to /dashboard', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

  it('navigate to ** creates error page component', fakeAsync(() => {
    router.navigate(['**']);
    tick();
    expect(errorComponent).toBeTruthy();
  }));


});
