class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        // Définition du listener sur le formulaire
        this.formListener();
    }

    /**
     * formListener Gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     */
    formListener() {
        $('#loginForm').on(
            'keyup',
            // Callback : fonction appelée si l'événement défini survient
            function(event) {
                // Vérifier le contenu des deux champs
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');

                // Est-ce que les deux champs sont remplis
                if (login.val() !== '' && password.val() !== '') {
                    // On peut activer le bouton...
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        );
    }
}