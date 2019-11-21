import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PixiElement } from '../../providers/element.interface';
import { PIXI_PARENT, PixiParent } from '../../providers/parent';
import * as PIXI from 'pixi.js';
import InteractionEvent = PIXI.interaction.InteractionEvent;

@Component({
	selector: 'pixi-sprite',
	templateUrl: './sprite.component.html',
	styleUrls: ['./sprite.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PixiSpriteComponent implements PixiElement<PIXI.Sprite> {
	@Input() x: number = 0;
	@Input() y: number = 0;
	@Input() texture: PIXI.Texture | string;

	@Output() click = new EventEmitter<InteractionEvent>();

	element: PIXI.Sprite;

	constructor(
		@Inject(PIXI_PARENT) private parent: PixiParent
	) {
	}

	ngOnInit() {
		this.element = new PIXI.Sprite(this.getTexture());
		this.applyProps();
		this.bindEvents();

		this.parent.element.addChild(this.element);
	}

	ngOnChanges() {
		this.applyProps();
	}

	applyProps() {
		if (!this.element) {
			return;
		}
		this.element.x = this.x;
		this.element.y = this.y;
	}

	bindEvents() {
		this.element.on('pointerdown', ev => this.click.emit(ev));
	}

	ngOnDestroy() {
		this.element.destroy();
	}

	private getTexture(): PIXI.Texture {
		if (typeof this.texture === 'string') {
			return PIXI.Texture.from(this.texture);
		}

		return this.texture;
	}
}
