/**
 * @name UserService
 * @desc Service de gestion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */
export class UserService {
    constructor() {}

    /**
     * Lit localStorage pour récupérer un éventuel utilisateur
     * @return boolean
     */
    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser'));
        if (user) {
            return true;
        }
        return false;
    }
}