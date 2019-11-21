import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as PIXI from 'pixi.js';
import { PIXI_PARENT } from '../../providers/parent';
import { PIXI_APP } from '../../providers/app';
import { PixiElement } from '../../providers/element.interface';
import { parseColor } from '../../utils/parse-color';

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
	@Input() backgroundColor: string | number = 0xffffff;
	@Input() width: number = 800;
	@Input() height: number = 600;
	@Input() resolution: number = devicePixelRatio || 1;

	@Output() tick: EventEmitter<number> = new EventEmitter<number>();

	app: PIXI.Application;
	element: PIXI.Container;

	constructor(private elementRef: ElementRef) {

	}

	ngOnInit() {
		this.app = new PIXI.Application();
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

		this.app.renderer.backgroundColor = parseColor(this.backgroundColor);
		this.app.renderer.resize(this.width, this.height);
		this.app.renderer.resolution = this.resolution;
	}

	bindEvents() {
		this.app.ticker.add(delta => this.tick.emit(delta));
	}

	ngOnDestroy() {
		this.app.destroy(true);
	}
}
