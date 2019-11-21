import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiContainerComponent } from './container.component';

describe('PixiContainerComponent', () => {
	let component: PixiContainerComponent;
	let fixture: ComponentFixture<PixiContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [PixiContainerComponent]
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PixiContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
