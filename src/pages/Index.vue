<template>
  <Layout>
    <h1>Welcome to the Quarry Lakes Demonstration Garden!</h1>
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    {{page.node.Scientific_Name}}
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


<style>
.home-links a {
  margin-right: 1rem;
}
body
{
  background: lightblue; 
}
</style>
