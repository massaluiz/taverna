<template>
    <div class="text-center">
        <v-menu top>
        <template v-slot:activator="{ on }">
            <v-btn color="modify"
                   dark
                   v-on="on">
                {{$ml.get('menu') }}
            </v-btn>
        </template>
        <v-list>
            <!--Menu Itens-->
            <v-list-item v-for="menuItem in routes" :key="menuItem.id"
                        @click="nav(menuItem.title)">
            <v-list-item-title>
                {{ $ml.get(menuItem.title) }}
            </v-list-item-title>
            </v-list-item>
            <!--Language-->
            <v-list-item v-for="lang in $ml.list" :key="lang"
                        class="modify" 
                        @click="$ml.change(lang)">
            <v-list-item-title>
                {{ lang.toUpperCase() }}
            </v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    name: 'ManuResponsive',
    props: ['routes'],
    methods: {
        nav(where) {
            this.$router.push({name: where});
        }
    }
}
</script>