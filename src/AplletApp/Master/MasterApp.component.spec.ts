import { TestBed } from '@angular/core/testing';
import { MasterAppComponent } from './MasterApp.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MasterAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MasterAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test1'`, () => {
    const fixture = TestBed.createComponent(MasterAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MasterAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test1 app is running!');
  });
});
