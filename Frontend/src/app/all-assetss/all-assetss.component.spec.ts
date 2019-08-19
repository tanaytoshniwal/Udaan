import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssetssComponent } from './all-assetss.component';

describe('AllAssetssComponent', () => {
  let component: AllAssetssComponent;
  let fixture: ComponentFixture<AllAssetssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAssetssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAssetssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
