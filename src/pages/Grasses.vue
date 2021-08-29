<template>
  <Layout>
    <H1>Grass Garden</H1>
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
        Type
      }
    }
  }
}
</page-query>

<script>
import Plant from '@/components/Plant.vue'
import AllPlants from '@/components/AllPlants.vue'


export default {
  metaInfo: {
    title: 'Quarry Lake Demonstration Garden -- Grasses Section',
  },
  components: {
    AllPlants,
    Plant,
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
