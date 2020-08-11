import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [SharedModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('d-layout').length).toBe(2);
  });
});
