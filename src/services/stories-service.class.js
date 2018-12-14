/**
 * @name StoriesService
 * @desc Service de mapping des stories
 * @author Aélion
 * @version 1.0.0
 */
import { UserService } from './user-service.class';

export class StoriesService {
    constructor() {
        this.uri = 'http://localhost:3000/stories';
    }

    /**
     * Retourne une promesse de stories d'un utilisateur identifié
     * @return Promise<any>
     */
    getMyStories() {
        const userService = new UserService();
        const user = userService.getUser();

        return new Promise((resolve) => {
            $.ajax({
                url: this.uri + '/' + user.id,
                method: 'get',
                dataType: 'json',
                success: (datas) => {
                    resolve(datas);
                },
                error: (xhr, error) => {
                    resolve(false);
                }
            })
        });
    }

    getAllStories() {
        return new Promise((resolve) => {
            $.ajax({
                url: this.uri,
                method: 'get',
                dataType: 'json',
                success: (datas) => {
                    resolve(datas);
                },
                error: (xhr, error) => {
                    resolve(false);
                }
            })
        });
    }
}