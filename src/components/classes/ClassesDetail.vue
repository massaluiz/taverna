<template>
    <v-card flat>
        <v-card-text>
            <h1>{{ tclass.name }}</h1>
            <br/>
            <v-img :src="tclass.src" class="image"></v-img>
            <br/>
            <h2>Hit Points</h2>
            <br/>
            <p>Hit Dice: {{ tclass.hitDice }}</p>
            <p>Hit Points at 1st Level: {{ tclass.hpAt1stLevel }}</p>
            <p>Hit Points at Higher Levels: {{ tclass.hpAtHigherLevels }}</p>
            <br/>
            <h2>Proficiencies</h2>
            <br/>
            <p>Armor: {{ tclass.profArmor }}</p>
            <p>Weapons: {{ tclass.profWeapons }}</p>
            <p>Saving Throws: {{ tclass.profSavingThrows }}</p>
            <p>Skills: {{ tclass.profSkills }}</p>
            <br/>
            <h2>Equipment</h2>
            <br/>
            <p>{{ tclass.equipment }}</p>
            <!--SESSÃO REMOVIDA PELA COMPLEXIDADE DA INFORMAÇÃO DADA PELA API-->
            <!--<h2>Table Evolution</h2>
            <br/>
            <table>
                <tr v-for="td of table" :key="td.id">
                    <td>{{td}}</td>
                    <td>{{td}}</td>
                    <td>{{td}}</td>
                    <td>{{td}}</td>
                    <td>{{td}}</td>
                </tr>
            </table>-->
            <br/>
            <h2>Class Abilities</h2>
            <br/>
            <div v-for="session of descriptionSession" :key="session.id">
                <h2>{{ session.title }}</h2>
                <br/>
                <p>{{ session.content }}</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>

import ClassesController from '../../controller/ClassesController';
import axios from '../../axios';

export default {
    name: 'ClassesDetail',
    created() {

        this.classesController = new ClassesController(axios);
        this.classesController.getByName(this.$route.params.class).then((tclass) => {
            
            this.tclass = tclass;

            this.tclass.desc.split("###").forEach(session => {
                let words = session.split(" ");
                if(words[1] != undefined) {
                    let title = words[1] + " " + words[2] + " " + words[3];
                    let position = title.indexOf('\n \n');
                    if(position!=-1) {
                        title = title.substring(0, position);
                    }
                    let content = session.replace(title, " ");
                    content = content.replace("#", " ");
                    this.descriptionSession.push({title, content});
                }
            });

            /*SESSÃO REMOVIDA PELA COMPLEXIDADE DA INFORMAÇÃO DADA PELA API-->*/
            /*let tableArray = tclass.table.split("|");
            let i = 13;
            for (i; i < tableArray.length; i++) {

                this.table.push(tableArray[i]);
                console.log(tableArray[i]);
            }*/
        })
    },
    data() {
        return {
            tclass: {},
            descriptionSession: [],
            table: []
        }
    }
}
</script>

<style scoped>
    .image {
        width: 200px;
    }
</style>