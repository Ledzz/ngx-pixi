import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import * as PIXI from 'pixi.js';
import { PIXI_PARENT, PixiParent } from '../../providers/parent';
import { PixiElement } from '../../providers/element.interface';
import InteractionEvent = PIXI.interaction.InteractionEvent;

@Component({
	selector: 'pixi-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PixiTextComponent implements PixiElement<PIXI.Text> {
	@Input() x: number = 0;
	@Input() y: number = 0;
	@Input() text: string = '';
	@Input() size: number = 12;
	@Input() color: number | string = 0x000000;
	@Input() buttonMode: boolean = false;
	@Input() interactive: boolean = false;

	@Output() click = new EventEmitter<InteractionEvent>();

	element: PIXI.Text;

	constructor(
		@Inject(PIXI_PARENT) private parent: PixiParent
	) {
	}

	ngOnInit() {
		this.element = new PIXI.Text(this.text, new PIXI.TextStyle());
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
		this.element.buttonMode = this.buttonMode;
		this.element.interactive = this.interactive;

		this.element.style.fill = this.color;
		this.element.style.fontSize = this.size;
	}

	bindEvents() {
		this.element.on('pointerdown', ev => this.click.emit(ev));
	}

	ngOnDestroy() {
		this.element.destroy();
	}
}
