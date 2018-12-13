/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
 * @version 1.0.1
 *  Ajout de la persistence de l'utilisateur dans localStorage
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
        // Appel vers le serveur :
        // GET http://localhost:3000/users/:login/:password

        let user = this;
        return new Promise((resolve) => {
            $.ajax({
                url: 'http://localhost:3000/users/' + this.userName + '/' + this.password,
                method: 'get',
                responseType: 'json',
                success: function(datas) {
                    const srvUser = datas[0];

                    if (srvUser) {
                        user.userName = srvUser.username;
                        user.group = srvUser.libelle;
                        user.name = srvUser.lastname;
                        user.forname = srvUser.forname;
                        user.civilite = srvUser.civilite;
        
                        const persistentUser = {
                            userName: user.userName,
                            group: user.group
                        };
        
                        // On ajoute l'utilisateur au localStorage
                        localStorage.setItem('storiesUser', JSON.stringify(persistentUser));

                        resolve(true);
                    } else {
                        // Pas d'utilisateur... désolé
                        resolve(false);
                    }

                },
                error: function(xhr, error) {
                    resolve(false);
                },
            });
        });
    }
}