import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './demos-basic/container/container.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'demos-basic-container',
	pathMatch: 'full'
}, {
	path: 'demos-basic-container',
	component: ContainerComponent,
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
