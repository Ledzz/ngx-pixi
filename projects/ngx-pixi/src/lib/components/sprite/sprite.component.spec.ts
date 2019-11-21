import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiSpriteComponent } from './texture.component';

describe('PixiSpriteComponent', () => {
	let component: PixiSpriteComponent;
	let fixture: ComponentFixture<PixiSpriteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [PixiSpriteComponent]
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PixiSpriteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
