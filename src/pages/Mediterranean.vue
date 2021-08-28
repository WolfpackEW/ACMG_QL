<template>
  <Layout>
    <h1>Mediterranean Garden</h1> 
    <div> 
      <p> 
      Alameda County is fortunate to be situated in a Mediterranean climate zone similar to those countries bordering the Mediterranean Basin. A Mediterranean climate is typically cool and wet in the winter, with infrequent freezes, and warm or hot and dry in the summer, with very little summer rain. There is a large collection of plant species that are well suited to this climate, wherever it occurs. The Mediterranean Garden features many of these plants including Lion’s Tail, Lavender, Jerusalem Sage, and Dwarf Olive Trees.
      </p>
    </div> 
    <AllPlants />
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet (filter: { Location: { in: ["mediterranean"] }}){
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
    title: 'Mediterranean Garden',
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
