import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	showMenu: boolean = true;
	constructor(private router: Router) { }
	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['/signin']);
	}
}