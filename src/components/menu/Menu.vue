<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col>
            <v-item>
                <v-card color="primary" class="d-flex align-center" dark height="200">
                    <v-scroll-y-transition>
                        <div class="display-3 flex-grow-1 text-center">Classes</div>
                    </v-scroll-y-transition>
                </v-card>
            </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
    name: "Menu"
}
</script>