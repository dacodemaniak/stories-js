/**
 * @name Router
 * @desc Collection des routes de l'application
 * @author Aélion
 * @version 1.0.0
 */
import { Route } from './route.class';

export class Router {
    constructor() {
        this.routes = new Map();

        // Définit les listeners de changement sur les routes
        window.addEventListener(
            'hashchange',
            this.getRoute
        );
    }

    add(route) {
        this.routes.set(route.path, route);
        return this;
    }

    getRoute() {
        const url = location.hash.slice(1) || '/';
        console.log('Routes définies : ' + this.routes.size);
        return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');
    }
}