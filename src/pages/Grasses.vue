<template>
<Layout>
  <h1>Grasses Garden</h1>
  <div class="attribute_container">
    <p> 
    The Grasses Garden is full and lush during spring and summer and then puts on great displays of color and texture in fall and winter. Once established, most grasses are low-maintenance, drought-tolerant, and resistant to disease.
    </p> 
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
     <!-- {{page.node.Scientific_Name}}
 <a href={{page.node.Links}}>{{page.node.Scientific_Name}}</a> -->
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
  allGoogleSheet (filter: { Location: { in: ["Grasses"] }}){
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
