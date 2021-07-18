<template>
  <Layout>
    <div> 
      <p>
      Stroll past the Sensory Garden and enjoy a kaleidoscope of colors and textures. Breathe in the sweet fragrance of flowers and herbs. This garden maximizes the sensory impact that a garden can offer. Rosemary is a fragrant evergreen herb native to the Mediterranean.
      </p> 
    </div> 
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    <a v-bind:href="page.node.Links">{{ page.node.Scientific_Name }}</a>
    </div>
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
