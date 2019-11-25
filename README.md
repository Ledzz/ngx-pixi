# ngx-pixi

Angular bindings for [pixi.js](https://pixijs.io/)

### !!!
This library is in development and it's definetly not ready for production. Any help appreciated.

### Usage

Import module and add to your AppModule:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPixiModule } from 'ngx-pixi';

@NgModule({
	declarations: [
		AppComponent

	],
	imports: [
		BrowserModule, NgxPixiModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

```

then use like this:
```angular2html
<pixi-app backgroundColor='0x1099bb' (tick)='onTick($event)'>
  <pixi-container
    #container
    [x]='400'
    [y]='300'
  >
    <pixi-sprite texture='/assets/bunny.png'></pixi-sprite>
  </pixi-container>
</pixi-app>
```

### Progress:
|Component     |Base implementation  |All inputs|All outputs|
|--------------|---------------------|----------|-----------|
|App           |✔️                |❌        |❌         |
|Container     |✔️                |❌        |❌         |
|Graphics      |✔️                |❌        |❌         |
|Rectangle     |✔️                |❌        |❌         |
|Sprite        |✔️                |❌        |❌         |
|Text          |✔️                |❌        |❌         |
