import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

import { environment } from '../environments/environment';

@Injectable()
export class AppAuthGuardService extends KeycloakAuthGuard {
    constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
        super(router, keycloakAngular);
    }

    async isAccessAllowed(route: ActivatedRouteSnapshot): Promise<boolean> {
        return (
            !environment.production ||
            (Array.isArray(this.roles) && route.data.roles.every((v) => this.roles.includes(v)))
        );
    }

    userHasRoles(roles: string[]): boolean {
        const userRoles = this.keycloakAngular.getUserRoles();
        return !environment.production || roles.some((role) => userRoles.includes(role));
    }
}
