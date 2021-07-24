<template>
  <Layout>
    <h1>Native Plants Garden</h1> 
    <div class="attribute_container"> 
      <p> 
    The Native Plant Garden connects us to our natural heritage and a sense of place that is California. These plants work well in low maintenance gardens, are adopted to dry summers, work well in water-wise gardens, and generally do not require fertilizers. Research indicates that native plants are preferred by native pollinators and wildlife. There is a native plant for any garden site or design style.
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

<!-- <p :class="[italic]"> **** </p> --> 

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
export default{
  data() {
    return {
      italic: 'italic', 
    }
  }
}
</script>
<!-- You can put in this in the return bracket
decoration: 'underline',
weight: 'weight',
--> 


<!-- You can reference this for font styles --> 

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
<!-- For example, if you wanted to make text underlined and bold, you can put this in style and 
.underline {text-decoration: underline; }
.weight { font-weight: bold; }
--> 