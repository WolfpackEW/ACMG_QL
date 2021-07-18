<template>
  <Layout>
    <h1>Welcome to the Quarry Lakes Demonstration Garden!</h1>
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    <p class="font-italic"> 
    <a v-bind:href="page.node.Links">{{ page.node.Scientific_Name }}</a>
    </p>
    </div>
  </Layout>
  
</template>
<page-query>
    query {
    allGoogleSheet{
      	edges{
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


<style>
.home-links a {
  margin-right: 1rem;
}
body
{
  background: lightblue; 
}
</style>
