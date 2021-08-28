<template>
  <section id="index" class="plant-section">
    <v-container>
      <v-row dense>
        <v-col sm="12">
          <div
            v-for="page in $page.allGoogleSheet.edges"
            :key="page.node.ID"
          >
            <v-card max-width="400" class="mx-auto" elevation="4">
              <v-avatar class="ma-3" size="194" tile>
                <g-link :to="page.node.ID">
                  <v-img
                    contain
                    max-height="194"
                    max-width="194"
                    :src="page.node.Img_URL"
                    :alt="page.node.Common_Name"
                  ></v-img>
                  </g-link>
              </v-avatar>
              <v-card-title>{{ page.node.Common_Name }}</v-card-title>
              <v-card-subtitle>
                <div class="container-name"> 
                  <g-link :to="page.node.ID">
                    <div :class="[italic]">{{ page.node.Full_Name }}</div>
                    <div class="div2"> {{ page.node.Cultivar }}</div>
                  </g-link>
                </div>
              </v-card-subtitle>
            </v-card>
            <br>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
