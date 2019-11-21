import { OnChanges, OnDestroy, OnInit } from '@angular/core';

export interface PixiElement<T> extends OnChanges, OnDestroy, OnInit {
	element: T;

	applyProps(): void;

	bindEvents(): void;
}
