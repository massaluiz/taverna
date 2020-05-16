export default class Classes {


    constructor(name, desc, equipment, hitDice,
                hpAt1stLevel, hpAtHigherLevels,
                profArmor, profSavingThrows,
                profSkills, profWeapons, table, src) {

        this.name = name;
        this.desc = desc;
        this.equipment = equipment;
        this.hitDice = hitDice;
        this.hpAt1stLevel = hpAt1stLevel;
        this.hpAtHigherLevels = hpAtHigherLevels;
        this.profArmor = profArmor;
        this.profSavingThrows = profSavingThrows;
        this.profSkills = profSkills;
        this.profWeapons = profWeapons;
        this.table = table;
        this.src = src;
        

    }
}