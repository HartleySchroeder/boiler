import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '@lib/services';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @Input() returnUrl!: string;

    private readonly _router = inject(Router);
    private readonly _authService = inject(AuthService);

    login(): void {
        this._authService.loginWithRedirect();
        //this._authService.login();

        this._router.navigate([this.returnUrl ?? `/`]);
    }
}
