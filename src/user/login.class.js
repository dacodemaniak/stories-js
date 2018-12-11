import { User } from './user.class';
import { Menu } from './../menu/menu.class';
import { Toast } from './../modules/toaster/toast.class';

export class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        // Définition des attributs
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

        // Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    /**
     * formListener Gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     */
    formListener() {
        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'keyup',
            // Callback : fonction appelée si l'événement défini survient
            function(event) {

                // Est-ce que les deux champs sont remplis
                if ( 
                    password.val() !== '' &&
                    login.val().length >= 5 ) {
                    // On peut activer le bouton...
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        );
    }

    submitListener() {
        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'submit',
            function(event) {
                event.preventDefault(); // Empêche l'action par défaut...
                
                // Instancie un nouvel utilisateur
                const user = new User();

                // Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                // Gère l'authentification...
                if (user.authenticate() === true) {
                    console.log('Oki, tu peux y aller');
                    // Instancie le menu...
                    const menu = new Menu();
                    menu.setUser(user);
                } else {
                    console.log('ko, t\'as pas le droit !');
                    // Efface les champs et désactive le bouton
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    const toast = new Toast(
                        {
                            message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            duration: 2,
                            background: 'warning',
                            width: 200,
                            height: 100
                        }
                    );
                    toast.toastIt();
                }
            }
        );
    }
}