<template>
    <v-card flat>
        <v-card-text>
            <h1>{{ tclass.name }}</h1>
            <v-img :src="tclass.src" class="image"></v-img>
            <h2 class="spacing">{{ $ml.get('hit-points') }}</h2>
            <p>
                <span class="bold">{{ $ml.get('hit-dice') }}</span> 
                {{ tclass.hitDice }}
            </p>
            <p>
                <span class="bold">{{ $ml.get('hit-points-1lvl') }}</span>
                 {{ tclass.hpAt1stLevel }}
            <p>
            <p>
                <span class="bold">{{ $ml.get('hit-points-highlvl') }}</span>
                {{ tclass.hpAtHigherLevels }}
            </p>
            <h2 class="spacing">{{ $ml.get('proficiences') }}</h2>
            <p>
                <span class="bold">{{ $ml.get('armor') }}</span> 
                {{ tclass.profArmor }}
            </p>
            <p>
                <span class="bold">{{ $ml.get('weapons') }}</span> 
                {{ tclass.profWeapons }}
            </p>
            <p>
                <span class="bold">{{ $ml.get('saving-throws') }}</span> 
                {{ tclass.profSavingThrows }}
            </p>
            <p>
                <span class="bold">{{ $ml.get('skills') }}</span> 
                {{ tclass.profSkills }}
            </p>
            <h2 class="spacing">{{ $ml.get('equipment') }}</h2>
            <p>{{ tclass.equipment }}</p>
            <h2 class="spacing">{{ $ml.get('class-ability') }}</h2>
            <div v-for="session of descriptionSession" :key="session.id">
                <h2 class="spacing">{{ session.title }}</h2>
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
        this.classesController.getByName(this.$route.params.class)
            .then((tclass) => {
                this.tclass = tclass;
                /*manipulação dados API :/ */
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
        });
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

    p {
        margin-bottom: 0 !important;
    }
    .image {
        width: 200px;
    }

    .spacing {
        padding: 10px 0px 10px 0px;
    }

    .bold {
        font-weight: bold;
    }
    
</style>