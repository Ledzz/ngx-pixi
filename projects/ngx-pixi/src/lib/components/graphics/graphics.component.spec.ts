import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiGraphicsComponent } from './graphics.component';

describe('PixiGraphicsComponent', () => {
	let component: PixiGraphicsComponent;
	let fixture: ComponentFixture<PixiGraphicsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [PixiGraphicsComponent]
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PixiGraphicsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
