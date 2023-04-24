import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'any'
})
export class LocalStorageService{
	set(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	get(key: string): any {
		let value = localStorage.getItem(key);
		return value && JSON.parse(value)
	}
	remove(key: string) {
		localStorage.removeItem(key);
	}
}