import { InjectionToken } from '@angular/core';
import * as PIXI from 'pixi.js';

export interface PixiParent {
	element: PIXI.Container;
}

export const PIXI_PARENT = new InjectionToken<PixiParent>('PIXI_PARENT');
