<template>
  <Layout>
    <AllPlants />
    <div class="attribute_container">
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
    allGoogleSheet{
      	edges{
          node {
            ID
            Scientific_Name
            Common_Name
            Main_Name
            Name_Extension
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
.italic { font-style: italic; }
.container-name div { 
    display: inline; 
		height: auto; 
  } 
</style>
