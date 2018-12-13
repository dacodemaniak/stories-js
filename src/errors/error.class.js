/**
 * @name Error
 * @desorc Contrôleur pour l'affichage des erreurs de routage
 * @author Aélion
 * @version 1.0.0
 */
export class Error {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/errors/views/error.view.html';
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