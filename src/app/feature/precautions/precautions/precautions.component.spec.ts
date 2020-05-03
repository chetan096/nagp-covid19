import { CoreModule } from '@app/core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionsComponent } from './precautions.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrecautionsComponent],
      imports: [CoreModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain \'Protect Yourself\' in description', () => {
    expect(fixture.debugElement.query(By.css('.description')).nativeElement.textContent).toContain('Protect yourself');
  });

  it('should have 5 precautions in the list', () => {
    const precautionListCount = fixture.debugElement.nativeElement.querySelectorAll('ul');
    expect(precautionListCount.length).toBe(5);
  });
});
