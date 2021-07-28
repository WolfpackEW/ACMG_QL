<template>
  <Layout>
    <h1>Native Plants Garden</h1> 
    <div class="attribute_container"> 
      <p>The Native Plant Garden connects us to our natural heritage and a sense of place that is California. These plants work well in low maintenance gardens, are adopted to dry summers, work well in water-wise gardens, and generally do not require fertilizers. Research indicates that native plants are preferred by native pollinators and wildlife. There is a native plant for any garden site or design style.
      </p>
    </div> 
    <AllPlants />
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet (filter: { Location: { in: ["Natives"] }}){
    edges {
      node {
            ID
            Scientific_Name
            Main_Name
            Name_Extension
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

export default {
  metaInfo: {
    title: 'Quarry Lake Demonstration Garden - Native Plants Section',
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
.italic { font-style: italic; }
.container-name div { 
    display: inline; 
		height: auto; }
</style>
