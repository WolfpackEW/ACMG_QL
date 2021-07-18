<template>
<Layout>
  <div>
    <p> 
    The Grasses Garden is full and lush during spring and summer and then puts on great displays of color and texture in fall and winter. Once established, most grasses are low-maintenance, drought-tolerant, and resistant to disease.
    </p> 
  </div> 
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
     <!-- {{page.node.Scientific_Name}}
 <a href={{page.node.Links}}>{{page.node.Scientific_Name}}</a> -->
    <a v-bind:href="page.node.Links">{{ page.node.Scientific_Name }}</a>
    </div>
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
export default{}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
