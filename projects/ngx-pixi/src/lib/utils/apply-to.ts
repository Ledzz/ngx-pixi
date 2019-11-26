import { set } from 'lodash';

export function ApplyTo(prop: string, parseProp?) {
	// tslint:disable-next-line:only-arrow-functions
	return function(target: any, propertyKey: string, descriptor?: PropertyDescriptor): any {
		let propValue;
		let instance;

		const originalOnInit = target.ngOnInit;
		target.ngOnInit = function() {
			instance = this;
			originalOnInit.call(this);
			updateProp();
		};

		Object.defineProperty(target, propertyKey, {
			configurable: false,
			enumerable: false,
			get() {
				return propValue;
			},
			set(value) {
				propValue = parseProp ? parseProp(value) : value;
				updateProp();
			}
		});

		const updateProp = () => {
			if (propValue === undefined || instance === undefined) {
				return;
			}

			set(instance, prop, propValue);
		};

		return descriptor;
	};
};
