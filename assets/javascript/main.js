/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/loginController.class';
import { MyStories } from '../../src/stories/myStories.class';

let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';



/* @version 1.0.1 Passage par contrôleur
const controller = new LoginController();
controller.getView();

// Créer une instance de Login
const login = new Login();
*/

// Pour test, instanciation du contrôleur pour l'affichage des stories utilisateur
const controller = new MyStories();
controller.getView();