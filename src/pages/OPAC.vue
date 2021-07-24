<template>
  <Layout>
    <h1>Outstanding Plants of Alameda County (OPAC)</h1> 
    <div class="attribute_container">
      <p> 
      The Outstanding Plants Garden features plants that grow well in Alameda County. They work well in gardens seeking to conserve water, reduce pesticide use, and attract wildlife and they do not require a lot of special care. Pictured here is one variety of the California Monkey Flower. Cultivars of this plant are available in a wide variety of colors.
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
		height: auto; 
  } 
</style>
