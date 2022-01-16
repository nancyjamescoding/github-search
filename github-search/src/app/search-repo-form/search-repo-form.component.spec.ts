import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRepoFormComponent } from './search-repo-form.component';

describe('SearchRepoFormComponent', () => {
  let component: SearchRepoFormComponent;
  let fixture: ComponentFixture<SearchRepoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRepoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRepoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
