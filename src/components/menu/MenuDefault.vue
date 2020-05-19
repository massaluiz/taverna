<template>
    <div>   
        <v-btn v-for="menuItem in routes" :key="menuItem.id" 
                class="modify" 
                @click="nav(menuItem.title)" 
                v-text="$ml.get(menuItem.title)">
            </v-btn>
            <v-btn v-for="lang in $ml.list" :key="lang" 
                class="modify" 
                @click="$ml.change(lang)" 
                v-text="lang">
            </v-btn>
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