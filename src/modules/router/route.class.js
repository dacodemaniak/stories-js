/**
 * @name Route
 * @desc Définition des routes de l'application
 * @author Aélion
 * @version 1.0.0
 * @version 1.0.1
 *  Ajout de l'attribut canActivate, permettant de restreindre l'accès
 */
export class Route {
    constructor(path, controller, canActivate=null) {
        this.path = path;
        this.controller = controller;
        this.canActivate = canActivate;
    }

    getPath() {
        return this.path;
    }

    getController() {
        return this.controller;
    }

    getCanActivate() {
        return this.canActivate;
    }
}