<template>
  <v-container class="grey lighten-5">
    <h1>WIP: COMPONENTE DE CRIAÇÃO DA FICHA</h1>
    <v-row
      class="mb-6"
      no-gutters>
      <v-col :md="6" :sm="12">
        <v-card>
            <h1>1. ESCOLHA UMA RAÇA </h1>
            <div>
                Cada personagem pertence a uma raça, uma das muitas espécies humanoides inteligentes do mundo de D&D. As raças mais comuns entre os personagens dos jogadores são anões, elfos, halflings e humanos. Algumas raças também têm sub-raças, como o anão da montanha ou o elfo da floresta. O capítulo 2 fornece mais informações sobre essas raças, assim como das raças menos difundidas como draconatos, gnomos, meio-elfos, meio-orcs e tieflings. A raça que você escolher contribui para a identidade de seu personagem de uma forma importante, estabelecendo sua aparência geral e os talentos naturais obtidos a partir de sua cultura e de seus antepassados. A raça de um personagem garante certos traços raciais, tais como sentidos especiais, proficiência com certas armas ou ferramentas, a proficiência em uma ou mais perícias, ou a capacidade de usar magias menores. Esses traços, às vezes, se encaixam com certas classes (veja o passo 2). Por exemplo, traços raciais dos halflings s pés-leves tornamnos ladinos excepcionais e os altos elfos tendem a ser magos poderosos. Às vezes, jogar contra essa tendência também pode ser divertido. Halflings paladinos e anões da montanha magos podem ser personagens incomuns, mas memoráveis. Sua raça também aumenta um ou mais valores de habilidade, que você determina no passo 3. Você deve anotar esses aumentos e lembrar-se de aplicá-los mais tarde. Você deve registrar os traços concedidos por sua raça na sua ficha de personagem. Lembre-se de anotar seus idiomas iniciais e seu deslocamento base também.
            </div>
        </v-card>
      </v-col>
      <v-col :md="6" :sm="12">
        <v-card>
            <v-card-media >
                <h3>Veja as Raças abaixo. <span class="info">info</span> </h3>
                <v-carousel hide-delimiters >
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    @click="selectRace(this.name)"
                    ></v-carousel-item>
                </v-carousel>
            </v-card-media>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            name: 'Humano', 
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            name: 'Anão',
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            name: 'Elfo',
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            name: 'Hobbit',
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    },
    methods: {
        selectRace(selected) {
            console.log(selected);
        }
    },
    computed: {
      cols () {
        const { lg, sm } = this.$vuetify.breakpoint
        return lg ? [3, 9] : sm ? [9, 3] : [6, 6]
      },
    },
  }
</script>

<style scoped>
    .info {
        color: blue;
    }

    .carousel {
        max-width: 300px;
    }
</style>