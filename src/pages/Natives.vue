<template>
  <Layout>
    <div> 
    The Native Plant Garden connects us to our natural heritage and a sense of place that is California. These plants work well in low maintenance gardens, are adopted to dry summers, work well in water-wise gardens, and generally do not require fertilizers. Research indicates that native plants are preferred by native pollinators and wildlife. There is a native plant for any garden site or design style.
    </div> 
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    
    {{page.node.Scientific_Name}}
    </div>
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
            Common_Name
            Description
            Size__height__
            Size__width_
            Bloom_Season
            Pruning_Needs
            Water_Needs
            Exposure
            Type 
            Location  
            Unique_ID
            Unique_Name
      }
    }
  }
}
</page-query>

<script>
export default{}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
