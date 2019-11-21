import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiTextComponent } from './text.component';

describe('PixiTextComponent', () => {
	let component: PixiTextComponent;
	let fixture: ComponentFixture<PixiTextComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [PixiTextComponent]
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PixiTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
