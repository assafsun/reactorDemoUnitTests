import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('JS test example', () => {
    const expectedNumber = 2;
    expect(expectedNumber).toBe(2);
  });

  it('Test creation of component object', () => {
    expect(component).toBeTruthy();
  });

  it('Test initial counter value', () => {
    expect(component.count).toBe(4);
  });

  it('Test counter value after increasing it by one', () => {
    component.updateCount(1);
    expect(component.count).toBe(5);
  });

  it('Test counter value after increasing it by one - async', async () => {
    await component.updateCountAsync(1);
    expect(component.count).toBe(5);
  });

  it('Test counter value after increasing it by one - fakeAsync', fakeAsync(() => {
    component.updateCountAsync(1);
    tick(4000);
    expect(component.count).toBe(5);
  }));

  it('Test counter value after creating a spy with a differnt value', () => {
    const spy = spyOn(component, 'updateCount').and.callFake(() => {
      component.count = 10;
    });
    component.updateCount(1);
    expect(component.count).toBe(10);
    expect(spy).toHaveBeenCalled();
  });

  it('Dom Testing: Test inital counter vlaue', () => {
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const  divElement = bannerElement.querySelector('div');

    expect(divElement.textContent).toEqual('4');
  });

  xit('Dom testing: Test increasing of counter by one - should failed', () => {
    fixture.detectChanges();
    let bannerElement: HTMLElement = fixture.nativeElement;
    let  divElement = bannerElement.querySelector('div');
    expect(divElement.textContent).toEqual('4');

    // Update value
    component.count = 5;
    bannerElement = fixture.nativeElement;
    divElement = bannerElement.querySelector('div');
    expect(divElement.textContent).toEqual('5');
  });

  it('Dom testing: Test increasing of counter by one - success', () => {
    fixture.detectChanges();
    let bannerElement: HTMLElement = fixture.nativeElement;
    let  divElement = bannerElement.querySelector('div');
    expect(divElement.textContent).toEqual('4');

    // Update value
    component.count = 5;
    fixture.detectChanges();

    bannerElement = fixture.nativeElement;
    divElement = bannerElement.querySelector('div');
    expect(divElement.textContent).toEqual('5');
  });

  it('Dom testing: Test increasing of counter by one - button query', () => {
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const  button = bannerElement.querySelector('button');

    button.click();
    fixture.detectChanges();
    const divElement = bannerElement.querySelector('div');
    expect(divElement.textContent).toEqual('3');
  });
});
