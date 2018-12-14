/**
 * @name Story
 * @desc Modèle pour la gestion des stories
 * @author Aélion
 * @version 1.0.0
 */
export class Story {
    constructor() {
        this.id = 0;
        this.title = '';
        this.description = '';
        this.begin_at = new Date();
        this.estimated_ended = new Date();
        this.real_ended = new Date();
        this.team_members_id = 0;
        this.business_values_id = 0;
    }

    getBeginDate() {
        return this.begin_at.getDate() + '-' + this.begin_at.getMonth() + '-' + this.begin_at.getFullYear();
    }

    getEstimatedEndDate() {
        return this.estimated_ended.getDate() + '-' + this.estimated_ended.getMonth() + '-' + this.estimated_ended.getFullYear();
    }

    deserialize(datas) {
        this.id = datas.id;
        this.title = datas.title;
        this.description = datas.description;
        this.begin_at = new Date(datas.begin_at);
        this.estimated_ended = new Date(datas.estimated_ended);
        this.real_ended = new Date(datas.real_ended);
        this.team_members_id = datas.team_members_id;
        this.business_values_id = datas.business_values_id;
        
        this.libelle = datas.libelle;
        if (datas.hasOwnProperty('forname')) {
            this.forname = datas.forname;
        }
        if (datas.hasOwnProperty('lastname')) {
            this.lastname = datas.lastname;
        }
    }
}