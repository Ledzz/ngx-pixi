import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import * as PIXI from 'pixi.js';
import { PIXI_PARENT } from '../../providers/parent';
import { PIXI_APP } from '../../providers/app';
import { PixiElement } from '../../providers/element.interface';
import { parseColor } from '../../utils/parse-color';
import InteractionEvent = PIXI.interaction.InteractionEvent;
import { ApplyTo } from '../../utils/apply-to';

@Component({
	selector: 'pixi-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: PIXI_PARENT,
		useExisting: AppComponent
	}, {
		provide: PIXI_APP,
		useExisting: AppComponent
	}]
})
export class AppComponent implements PixiElement<PIXI.Container> {
	@Input() @ApplyTo('app.ticker.autoStart') autoStart: boolean = true;
	@Input() width: number = 800;
	@Input() height: number = 600;
	@Input() @ApplyTo('app.renderer.view') view: HTMLCanvasElement;
	@Input() @ApplyTo('app.renderer.transparent') transparent: boolean = false;
	@Input() @ApplyTo('app.renderer.autoDensity') autoDensity: boolean = false;
	@Input() antialias: boolean = false;
	@Input() @ApplyTo('app.renderer.preserveDrawingBuffer') preserveDrawingBuffer: boolean = false;
	@Input() @ApplyTo('app.renderer.resolution') resolution: number = devicePixelRatio || 1;
	@Input() forceCanvas: boolean = false;
	@Input() @ApplyTo('app.renderer.backgroundColor', parseColor) backgroundColor: string | number = 0xffffff;
	@Input() @ApplyTo('app.renderer.clearBeforeRender') clearBeforeRender: boolean = true;
	@Input() forceFXAA: boolean = false;
	@Input() powerPreference: string;
	@Input() sharedTicker: boolean = false;
	@Input() sharedLoader: boolean = false;
	@Input() resizeTo: Window | HTMLElement;

	@Output() tick: EventEmitter<number> = new EventEmitter<number>();

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

	app: PIXI.Application;
	element: PIXI.Container;

	constructor(private elementRef: ElementRef) {

	}

	ngOnInit() {
		this.app = new PIXI.Application({
			antialias: this.antialias,
			forceCanvas: this.forceCanvas,
			forceFXAA: this.forceFXAA,
			powerPreference: this.powerPreference,
			sharedTicker: this.sharedTicker,
			sharedLoader: this.sharedLoader,
			resizeTo: this.resizeTo
		});
		this.element = this.app.stage;

		this.applyProps();
		this.bindEvents();

		this.elementRef.nativeElement.appendChild(this.app.view);
	}

	ngOnChanges() {
		this.applyProps();
	}

	applyProps() {
		if (!this.element) {
			return;
		}

		this.app.renderer.resize(this.width, this.height);
	}

	bindEvents() {
		this.app.ticker.add(delta => this.tick.emit(delta));

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

	ngOnDestroy() {
		this.app.destroy(true);
	}
}
