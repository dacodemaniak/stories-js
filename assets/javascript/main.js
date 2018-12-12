/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/loginController.class';
import { MyStories } from '../../src/stories/myStories.class';
import { UserService } from './../../src/services/user-service.class';

$(window).on(
    'hashchange',
    function(event) {
        const url = document.location.hash;
        console.log('Nouvelle URL : ' + url);
        if (url === '#/mystories') {
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();
            
                // Créer une instance de Login
                const login = new Login();
            } else {
                // Il y a déjà un utilisateur...
                const controller = new MyStories();
                controller.getView();
            }
        } else {
            const controller = new LoginController();
            controller.getView();
        
            // Créer une instance de Login
            const login = new Login();            
        }
    }
);

$(window).on(
    'load',
    function(event) {
        const url = document.location.hash;
        console.log('Nouvelle URL : ' + url);
        if (url === '#/mystories') {
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();
            
                // Créer une instance de Login
                const login = new Login();
            } else {
                // Il y a déjà un utilisateur...
                const controller = new MyStories();
                controller.getView();
            }
        } else {
            const controller = new LoginController();
            controller.getView();
        
            // Créer une instance de Login
            const login = new Login();            
        }
    }    
);
