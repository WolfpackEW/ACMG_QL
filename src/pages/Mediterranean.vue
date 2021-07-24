<template>
  <Layout>
    <h1>Mediterranean Garden</h1> 
    <div class="attribute_container"> 
      <p> 
      Alameda County is fortunate to be situated in a Mediterranean climate zone similar to those countries bordering the Mediterranean Basin. A Mediterranean climate is typically cool and wet in the winter, with infrequent freezes, and warm or hot and dry in the summer, with very little summer rain. There is a large collection of plant species that are well suited to this climate, wherever it occurs. The Mediterranean Garden features many of these plants including Lion’s Tail, Lavender, Jerusalem Sage, and Dwarf Olive Trees.
      </p> 
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    <div class="container-name"> 
       <a v-bind:href="page.node.Links">
         <div :class="[italic]">{{ page.node.Main_Name }}</div>
         <div class="div2"> {{ page.node.Name_Extension }}</div>
         <div class="div3"> ({{ page.node.Common_Name }})</div> 
      </a> 
      </div> 
    </div>
  </div>
    <br>
    <br>  
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
  export default{
  data() {
    return {
      italic: 'italic', 
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.attribute_container{
  padding: 10px;
  background: white; 
}
body
{
  background: lightblue; 
}
.italic { font-style: italic; }
.container-name div { 
    display: inline; 
		height: auto; }
</style>
