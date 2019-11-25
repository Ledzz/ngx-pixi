import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPixiModule } from '@ledzz/ngx-pixi';
import { ContainerComponent } from './demos-basic/container/container.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		ContainerComponent,

	],
	imports: [
		BrowserModule,
		NgxPixiModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
