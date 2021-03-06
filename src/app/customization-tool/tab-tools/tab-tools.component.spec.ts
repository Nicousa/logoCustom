import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabToolsComponent } from './tab-tools.component';

describe('TabToolsComponent', () => {
  let component: TabToolsComponent;
  let fixture: ComponentFixture<TabToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
