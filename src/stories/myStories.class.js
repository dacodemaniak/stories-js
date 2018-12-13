/**
 * @name MyStories
 * @desc Contrôleur pour l'affichage des stories utilisateur
 * @author Aélion
 * @version 1.0.0
 */

import { Menu } from './../menu/menu.class';
import { UserService } from './../services/user-service.class';

export class MyStories {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/stories/views/stories.view.html';

        const userService = new UserService();
        const menu = new Menu();
        menu.setUser(userService.getUser());
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