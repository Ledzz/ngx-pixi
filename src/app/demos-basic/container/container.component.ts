import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
	selector: 'demo-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
	floor = Math.floor;
	rotation = 0;
	array25 = Array(25).fill(null).map((_, index) => index);

	onTick(delta) {
		this.rotation += 0.01 * delta;
	}
}
