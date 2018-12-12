/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */
import { Router } from '../../src/modules/router/router.class';
import { Login } from './../../src/user/login.class';
import { Route } from '../../src/modules/router/route.class';

// Instancie les routes de l'application
const routes = new Router();
routes
    .add(
        new Route('/', 'Login')
    )
    .add(
        new Route('/home', 'Home')
    );

// Charge la route définie
const route = routes.getRoute();
console.log('Route : ' + route.getController());

// Créer une instance de Login
const login = new Login();