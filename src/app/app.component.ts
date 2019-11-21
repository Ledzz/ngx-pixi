import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'demo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
