<template>
  <Layout>
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
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
    <br>
    </div>
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
    query {
    allGoogleSheet{
      	edges{
          node {
            ID
            Scientific_Name
            Common_Name
            Full_Name
            Cultivar
        Description
            Size__height_
            Size__width_
        Bloom_Season
            Pruning_Needs
        Water_Needs
        Exposure
        Pruning_Needs
        Location
            Unique_Name
            Img_URL
            Attribution
            Links
               }
             }
                  }
           }
</page-query>
<script>

import AllPlants from '@/components/AllPlants.vue'
export default{
  data() {
    return {
      italic: 'italic', 
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.italic { font-style: italic; }
.container-name div { 
    display: inline; 
		height: auto; 
  } 
</style>
