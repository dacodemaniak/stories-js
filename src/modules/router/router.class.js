/**
 * @name Router
 * @desc Collection des routes de l'application
 * @author Aélion
 * @version 1.0.0
 */

import { Route } from './route.class';

import { LoginController } from './../../user/login/loginController.class';
import { MyStories } from './../../stories/myStories.class';
import { LogoutController } from '../../user/logout/logoutController.class';
import { Error } from './../../errors/error.class';
import { UserService } from './../../services/user-service.class';


const controllers = {
    LoginController,
    LogoutController,
    MyStories,
    Error
}
export class Router {
    constructor() {
        this.routes = new Map();

        let router = this;

        // Définit le listener sur les routes
        $(window).on(
            'hashchange',
            function(event) {
                router.getRoute()
            }
        );

        $(window).on(
            'load',
            function(event) {
                router.getRoute()
            }
        );
    }

    add(route) {
        this.routes.set(route.path, route);
        return this;
    }

    getRoute() {
        const url = location.hash.slice(1) || '/';
        console.log('URL à charger [' + url + ']');

        // On va essayer de chercher si dans les routes, on a quelque chose qui correspond
        const route = this.routes.get(url);

        // Instance d'un contrôleur vide
        let controller = {};
        
        if (!route) {
            controller = new Error();
        } else {
            if (url === '/') {
                // On vérifie l'utilisateur
                const userService = new UserService();
                if (userService.hasUser()) {
                    // Il y a un utilisateur identifié... donc pas de login
                    controller = new MyStories();
                } else {
                    // Pas encore d'utilisateur, on instancie LoginController
                    controller = new LoginController();
                }
            } else {
                // La route définie est autre chose...
                console.log('Instancie : ' + route.getController());

                const canActivate = route.getCanActivate();
                if (canActivate) {
                    // L'instanciation requiert une vérification
                    if (canActivate.hasUser()) {
                        controller = new controllers[route.getController()]();
                    } else {
                        // On ne peut pas, sans utilisateur identifié
                        controller = new LoginController();
                    }
                } else {
                    // Route activable sans contrôle
                    controller = new controllers[route.getController()]();
                }
            }
        }
        // A la fin, on charge la vue
        controller.getView();
    }
}