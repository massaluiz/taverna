import Classes from '../model/Classes';

export default class ClassesController {

    constructor(axiosResource) {

        this._axiosResource = axiosResource;

    }

    getList() {
        return new Promise((resolve, reject) => {

            try {
                this._axiosResource.get(`classes/`).then((res) => {

                    let resultCall = res.data.results;
                    let classes = [];
                    resultCall.forEach(tclass => {
                        classes.push(
                            new Classes(tclass.name,
                                        tclass.desc,
                                        tclass.equipment,
                                        tclass.hit_dice,
                                        tclass.hp_at_1st_level,
                                        tclass.hp_at_higher_levels,
                                        tclass.prof_armor,
                                        tclass.prof_saving_throws,
                                        tclass.prof_skills,
                                        tclass.pro_weapons,
                                        tclass.table)
                        );
                    });

                    resolve(classes);
                });
            } catch(error) {
                reject(error);
            }
        });
    }
}