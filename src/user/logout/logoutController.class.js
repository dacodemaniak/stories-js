/**
 * @name LogoutController
 * @desc Contrôleur pour la déconnexion de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */
import { LoginController } from './../login/loginController.class';
import { UserService } from '../../services/user-service.class';
import { Menu } from '../../menu/menu.class';

export class LogoutController {
    constructor() {
        // Utilise le service pour supprimer la clé
        const userService = new UserService();
        userService.removeUser();

        // Ne pas oublier de restaurer le menu utilisateur et donc de virer les options
        const menu = new Menu();
        menu.clear();
        
        // Instancier la classe Login pour la gestion du formulaire
        this.login = new LoginController();
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */
    getView() {
        return this.login.getView();
    }
}