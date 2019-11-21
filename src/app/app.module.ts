import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPixiModule } from 'ngx-pixi';
import { ContainerComponent } from './demos-basic/container/container.component';

@NgModule({
	declarations: [
		AppComponent,
		ContainerComponent,

	],
	imports: [
		BrowserModule, NgxPixiModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
