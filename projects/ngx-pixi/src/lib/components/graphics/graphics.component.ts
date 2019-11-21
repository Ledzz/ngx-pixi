import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PIXI_GRAPHICS } from '../../providers/graphics';
import { PIXI_PARENT, PixiParent } from '../../providers/parent';
import * as PIXI from 'pixi.js';

@Component({
	selector: 'pixi-graphics',
	templateUrl: './graphics.component.html',
	styleUrls: ['./graphics.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: PIXI_GRAPHICS,
		useExisting: PixiGraphicsComponent
	}]
})
export class PixiGraphicsComponent implements OnInit, OnDestroy {
	element: PIXI.Graphics;

	constructor(
		@Inject(PIXI_PARENT) private parent: PixiParent
	) {
	}

	ngOnInit() {
		this.element = new PIXI.Graphics();
		this.parent.element.addChild(this.element);
	}

	ngOnDestroy() {
		this.element.destroy();
	}
}
