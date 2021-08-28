<template>
  <Layout>
    <h1>Sensory Garden</h1>
    <div>
      <p>
      Stroll past the Sensory Garden and enjoy a kaleidoscope of colors and textures. Breathe in the sweet fragrance of flowers and herbs. This garden maximizes the sensory impact that a garden can offer. Rosemary is a fragrant evergreen herb native to the Mediterranean.
      </p> 
    </div>
    <br>
    <br>  
    <AllPlants />
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet (filter: { Location: { in: ["Sensory"] }}){
    edges {
      node {
            ID
            Scientific_Name
            Full_Name
            Cultivar
            Common_Name
            Description
            Size__height_
            Size__width_
            Bloom_Season
            Pruning_Needs
            Water_Needs
            Exposure
            Type 
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
import Plant from '@/components/Plant.vue'
import AllPlants from '@/components/AllPlants.vue'
//import Card from "@/components/Card.vue"

export default {
  metaInfo: {
    title: 'Sensory Garden',
  },
  components: {
    AllPlants,
    Plant,
    //Card
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
