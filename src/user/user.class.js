/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
 */
export class User {
    constructor() {}

    /**
     * Définit le username de l'utilisateur
     * @param {*} userName 
     */
    setUserName(userName) {
        this.userName = userName;
    }

    /**
     * Définit le mot de passe utilisateur
     * @param {*} password 
     */
    setPassword(password) {
        this.password = password;
    }

    /**
     * Identifie l'utilisateur à partir d'un login et d'un mot de passe
     * @return boolean
     */
    authenticate() {
        if (this.userName === 'jlaubert' && this.password === 'jla') {
            this.group = 'Administrateur';
            return true;
        }

        return false;
    }
}