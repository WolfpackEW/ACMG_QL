<template>
  <Layout>
    <div>
      The Outstanding Plants Garden features plants that grow well in Alameda County. They work well in gardens seeking to conserve water, reduce pesticide use, and attract wildlife and they do not require a lot of special care. Pictured here is one variety of the California Monkey Flower. Cultivars of this plant are available in a wide variety of colors.
    </div> 
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    {{page.node.Scientific_Name}}
    </div>
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
