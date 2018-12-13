/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aélion
 * @version 1.0.0
 */

 import { Login } from './../login.class';

export class LoginController {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';

        // Instancier la classe Login pour la gestion du formulaire
        this.login = new Login();
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */
    getView() {
        // Récupère le placeholder de mon application
        const app = $('[app]');

        $.get(
            this.view,
            // Callback appelée après que le fichier ait été chargé
            function(viewContent) {
                app.empty(); // Vide le contenu le cas échéant
                app.html(viewContent);
            }
        );
    }
}