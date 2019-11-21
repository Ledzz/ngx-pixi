import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PIXI_GRAPHICS } from '../../providers/graphics';
import { PixiGraphicsComponent } from '../graphics/graphics.component';
import { parseColor } from '../../utils/parse-color';
import InteractionEvent = PIXI.interaction.InteractionEvent;

@Component({
	selector: 'pixi-rectangle',
	templateUrl: './rectangle.component.html',
	styleUrls: ['./rectangle.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PixiRectangleComponent implements OnInit {
	@Input() x: number = 0;
	@Input() y: number = 0;
	@Input() width: number = 0;
	@Input() height: number = 0;
	@Input() color: number | string = 0x000000;
	@Input() buttonMode: boolean = false;
	@Input() interactive: boolean = false;

	@Output() click = new EventEmitter<InteractionEvent>();

	constructor(
		@Inject(PIXI_GRAPHICS) private graphics: PixiGraphicsComponent
	) {
	}

	ngOnInit() {
		this.graphics.element.beginFill(parseColor(this.color));
		this.graphics.element.drawRect(this.x, this.y, this.width, this.height);
		this.graphics.element.endFill();
	}
}
