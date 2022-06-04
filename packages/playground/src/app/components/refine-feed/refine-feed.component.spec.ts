import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefineFeedComponent } from './refine-feed.component';
import { RefineFeedModule } from './refine-feed.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppSettingsService } from '../../services/app-settings.service';

describe('RefineFeedComponent', () => {
  let component: RefineFeedComponent;
  let fixture: ComponentFixture<RefineFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefineFeedModule, HttpClientTestingModule],
      providers: [
        {
          provide: AppSettingsService,
          useValue: { get: () => ({ flags: {} }) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefineFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
