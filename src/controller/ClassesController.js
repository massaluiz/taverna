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
                    /**Objeto que contém centralizado as imagens usadas por classe, dado ao fato da API não fornecer essa informação */
                    let classesSrc = [
                        {name: 'Barbarian', src: 'https://vignette.wikia.nocookie.net/eladriells-dd/images/9/99/Barbarian.jpg/revision/latest/scale-to-width-down/340?cb=20190331084929'},
                        {name: 'Bard', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png'},
                        {name: 'Cleric', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/371/420/618/636272706155064423.png'},
                        {name: 'Druid', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/346/420/618/636272691461725405.png'},
                        {name: 'Fighter', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png'},
                        {name: 'Monk', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/489/420/618/636274646181411106.png'},
                        {name: 'Paladin', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png'},
                        {name: 'Ranger', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/367/420/618/636272702826438096.png'},
                        {name: 'Rogue', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/384/420/618/636272820319276620.png'},
                        {name: 'Sorcerer', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png'},
                        {name: 'Warlock', src: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/375/420/618/636272708661726603.png'},
                        {name: 'Wizard', src: 'https://i.pinimg.com/originals/66/22/2f/66222f555b0073f5ab2a8fb5c92bd812.jpg'},
                    ];
                    resultCall.forEach(tclass => {

                        let src = '';
                        classesSrc.forEach(tsrc => {
                            if(tclass.name == tsrc.name) {
                                src = tsrc.src;
                                return;
                            }

                        });

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
                                        tclass.table,
                                        src)
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