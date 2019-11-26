import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, SkipSelf } from '@angular/core';
import { PIXI_PARENT, PixiParent } from '../../providers/parent';
import { AppComponent } from '../app/app.component';
import { PIXI_APP } from '../../providers/app';
import * as PIXI from 'pixi.js';
import { PixiElement } from '../../providers/element.interface';
import InteractionEvent = PIXI.interaction.InteractionEvent;
import { ApplyTo } from '../../utils/apply-to';

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
	@Input() @ApplyTo('element.accessible') accessible: boolean;
	@Input() @ApplyTo('element.accessibleChildren') accessibleChildren: boolean = true;
	@Input() @ApplyTo('element.accessibleHint') accessibleHint: string;
	@Input() @ApplyTo('element.accessiblePointerEvents') accessiblePointerEvents: string = 'auto';
	@Input() @ApplyTo('element.accessibleTitle') accessibleTitle: string;
	@Input() @ApplyTo('element.accessibleType') accessibleType: string = 'button';
	@Input() @ApplyTo('element.alpha') alpha: number;
	@Input() @ApplyTo('element.angle') angle: number;
	@Input() @ApplyTo('element.buttonMode') buttonMode: boolean;
	@Input() @ApplyTo('element.cacheAsBitmap') cacheAsBitmap: boolean;
	@Input() @ApplyTo('element.cursor') cursor: string;
	@Input() @ApplyTo('element.filterArea') filterArea: PIXI.Rectangle;
	@Input() @ApplyTo('element.filters') filters: Array<PIXI.Filter>;
	@Input() @ApplyTo('element.height') height: number;
	@Input() @ApplyTo('element.hitArea') hitArea: PIXI.IHitArea;
	@Input() @ApplyTo('element.interactive') interactive: boolean;
	@Input() @ApplyTo('element.interactiveChildren') interactiveChildren: boolean;
	@Input() @ApplyTo('element.isMask') isMask: boolean;
	@Input() @ApplyTo('element.isSprite') isSprite: boolean;
	@Input() @ApplyTo('element.mask') mask: PIXI.Graphics | PIXI.Sprite | null;
	@Input() @ApplyTo('element.name') name: string;
	@Input() @ApplyTo('element.pivot') pivot: PIXI.IPoint;
	@Input() @ApplyTo('element.position') position: PIXI.Point;
	@Input() @ApplyTo('element.rotation') rotation: number;
	@Input() @ApplyTo('element.scale') scale: PIXI.IPoint;
	@Input() @ApplyTo('element.skew') skew: PIXI.ObservablePoint;
	@Input() @ApplyTo('element.sortableChildren') sortableChildren: boolean;
	@Input() @ApplyTo('element.sortDirty') sortDirty: boolean;
	@Input() @ApplyTo('element.transform') transform: PIXI.Transform;
	@Input() @ApplyTo('element.visible') visible: boolean;
	@Input() @ApplyTo('element.width') width: number;
	@Input() @ApplyTo('element.x') x: number;
	@Input() @ApplyTo('element.y') y: number;
	@Input() @ApplyTo('element.zIndex') zIndex: number;

	@Input('pivot.x') @ApplyTo('element.pivot.x') pivotX: number = 0;
	@Input('pivot.y') @ApplyTo('element.pivot.y') pivotY: number = 0;

	@Output() added = new EventEmitter<PIXI.Container>();
	@Output() click = new EventEmitter<InteractionEvent>();
	@Output() mousedown = new EventEmitter<InteractionEvent>();
	@Output() mousemove = new EventEmitter<InteractionEvent>();
	@Output() mouseout = new EventEmitter<InteractionEvent>();
	@Output() mouseover = new EventEmitter<InteractionEvent>();
	@Output() mouseup = new EventEmitter<InteractionEvent>();
	@Output() mouseupoutside = new EventEmitter<InteractionEvent>();
	@Output() pointercancel = new EventEmitter<InteractionEvent>();
	@Output() pointerdown = new EventEmitter<InteractionEvent>();
	@Output() pointermove = new EventEmitter<InteractionEvent>();
	@Output() pointerout = new EventEmitter<InteractionEvent>();
	@Output() pointerover = new EventEmitter<InteractionEvent>();
	@Output() pointertap = new EventEmitter<InteractionEvent>();
	@Output() pointerup = new EventEmitter<InteractionEvent>();
	@Output() pointerupoutside = new EventEmitter<InteractionEvent>();
	@Output() removed = new EventEmitter<PIXI.Container>();
	@Output() rightclick = new EventEmitter<InteractionEvent>();
	@Output() rightdown = new EventEmitter<InteractionEvent>();
	@Output() rightup = new EventEmitter<InteractionEvent>();
	@Output() rightupoutside = new EventEmitter<InteractionEvent>();
	@Output() tap = new EventEmitter<InteractionEvent>();
	@Output() touchcancel = new EventEmitter<InteractionEvent>();
	@Output() touchend = new EventEmitter<InteractionEvent>();
	@Output() touchendoutside = new EventEmitter<InteractionEvent>();
	@Output() touchmove = new EventEmitter<InteractionEvent>();
	@Output() touchstart = new EventEmitter<InteractionEvent>();

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
		this.element.on('added', (ev: PIXI.Container) => this.added.emit(ev));
		this.element.on('click', ev => this.click.emit(ev));
		this.element.on('mousedown', ev => this.mousedown.emit(ev));
		this.element.on('mousemove', ev => this.mousemove.emit(ev));
		this.element.on('mouseout', ev => this.mouseout.emit(ev));
		this.element.on('mouseover', ev => this.mouseover.emit(ev));
		this.element.on('mouseup', ev => this.mouseup.emit(ev));
		this.element.on('mouseupoutside', ev => this.mouseupoutside.emit(ev));
		this.element.on('pointercancel', ev => this.pointercancel.emit(ev));
		this.element.on('pointerdown', ev => this.pointerdown.emit(ev));
		this.element.on('pointermove', ev => this.pointermove.emit(ev));
		this.element.on('pointerout', ev => this.pointerout.emit(ev));
		this.element.on('pointerover', ev => this.pointerover.emit(ev));
		this.element.on('pointertap', ev => this.pointertap.emit(ev));
		this.element.on('pointerup', ev => this.pointerup.emit(ev));
		this.element.on('pointerupoutside', ev => this.pointerupoutside.emit(ev));
		this.element.on('removed', (ev: PIXI.Container) => this.removed.emit(ev));
		this.element.on('rightclick', ev => this.rightclick.emit(ev));
		this.element.on('rightdown', ev => this.rightdown.emit(ev));
		this.element.on('rightup', ev => this.rightup.emit(ev));
		this.element.on('rightupoutside', ev => this.rightupoutside.emit(ev));
		this.element.on('tap', ev => this.tap.emit(ev));
		this.element.on('touchcancel', ev => this.touchcancel.emit(ev));
		this.element.on('touchend', ev => this.touchend.emit(ev));
		this.element.on('touchendoutside', ev => this.touchendoutside.emit(ev));
		this.element.on('touchmove', ev => this.touchmove.emit(ev));
		this.element.on('touchstart', ev => this.touchstart.emit(ev));
	}

	applyProps() {
		if (!this.element) {
			return;
		}
	}

	ngOnDestroy() {
		this.element.destroy();
	}
}
