<template>
  <Layout>
    <div>
    The Grasses Garden is full and lush during spring and summer and then puts on great displays of color and texture in fall and winter. Once established, most grasses are low-maintenance, drought-tolerant, and resistant to disease.
    </div> 
    <AllPlants />
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet (filter: { Location: { in: ["Grasses"] }}){
    edges {
      node {
        ID
        Scientific_Name
        Common_Name
        Description
        Bloom_Season
        Water_Needs
        Exposure
        Pruning_Needs
        Location
        Size__height_
        Size__width_
        Type
        Img_URL
        Attribution
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
    title: 'Hello, UC Master Gardeners!',
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
