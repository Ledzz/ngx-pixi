import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, SkipSelf } from '@angular/core';
import { PIXI_PARENT, PixiParent } from '../../providers/parent';
import { AppComponent } from '../app/app.component';
import { PIXI_APP } from '../../providers/app';
import * as PIXI from 'pixi.js';
import { PixiElement } from '../../providers/element.interface';
import InteractionEvent = PIXI.interaction.InteractionEvent;

@Component({
	selector: 'pixi-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: PIXI_PARENT,
		useExisting: PixiContainerComponent
	}]
})
export class PixiContainerComponent implements PixiElement<PIXI.Container>, PixiParent {
	@Input() rotation: number = 0;
	@Input() x: number = 0;
	@Input() y: number = 0;
	@Input() buttonMode: boolean = false;
	@Input() interactive: boolean = false;
	@Input('pivot.x') pivotX: number = 0;
	@Input('pivot.y') pivotY: number = 0;

	@Output() click = new EventEmitter<InteractionEvent>();


	element: PIXI.Container;

	constructor(
		@Inject(PIXI_APP) private appComponent: AppComponent,
		@Inject(PIXI_PARENT) @SkipSelf() private parent: PixiParent
	) {
	}

	ngOnInit() {
		this.element = new PIXI.Container();
		this.applyProps();
		this.bindEvents();

		this.parent.element.addChild(this.element);
	}

	ngOnChanges() {
		this.applyProps();
	}

	bindEvents() {
		this.element.on('pointerdown', ev => this.click.emit(ev));
	}

	applyProps() {
		if (!this.element) {
			return;
		}
		this.element.rotation = this.rotation;
		this.element.x = this.x;
		this.element.y = this.y;
		this.element.buttonMode = this.buttonMode;
		this.element.interactive = this.interactive;

		this.element.pivot.x = this.pivotX;
		this.element.pivot.y = this.pivotY;
	}

	ngOnDestroy() {
		this.element.destroy();
	}
}
