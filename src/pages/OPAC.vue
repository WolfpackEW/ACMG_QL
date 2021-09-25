<template>
  <Layout>
    <h1>Outstanding Plants of Alameda County (OPAC)</h1> 
    <div>
      <p> 
      The Outstanding Plants Garden features plants that grow well in Alameda County. They work well in gardens seeking to conserve water, reduce pesticide use, and attract wildlife and they do not require a lot of special care. Pictured here is one variety of the California Monkey Flower. Cultivars of this plant are available in a wide variety of colors.
      </p> 
    </div>
    <AllPlants />
    <br>
    <br>
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet (filter: { Location: { in: ["OPAC"] }}){
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
    title: 'Outstanding Plants of Alameda County',
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
