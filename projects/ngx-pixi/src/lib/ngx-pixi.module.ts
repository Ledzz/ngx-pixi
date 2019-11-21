import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { PixiContainerComponent } from './components/container/container.component';
import { PixiTextComponent } from './components/text/text.component';
import { PixiGraphicsComponent } from './components/graphics/graphics.component';
import { PixiRectangleComponent } from './components/rectangle/rectangle.component';
import { PixiSpriteComponent } from './components/sprite/sprite.component';

@NgModule({
	declarations: [
		AppComponent,
		PixiContainerComponent,
		PixiTextComponent,
		PixiGraphicsComponent,
		PixiRectangleComponent,
		PixiSpriteComponent
	],
	imports: [],
	exports: [
		AppComponent,
		PixiContainerComponent,
		PixiTextComponent,
		PixiGraphicsComponent,
		PixiRectangleComponent,
		PixiSpriteComponent
	]
})
export class NgxPixiModule {
}
