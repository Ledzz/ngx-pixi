import { InjectionToken } from '@angular/core';
import * as PIXI from 'pixi.js';

export const PIXI_APP = new InjectionToken<PIXI.Application>('PIXI_APP');
