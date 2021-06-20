<template>
  <Layout>
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.node.ID">
    {{page.node.Scientific_Name}}
    {{page.node.Common_Name}}
    {{page.node.Unique_Name}}
    </div>
  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet (filter: { Location: { in: ["Mediterranean"] }}){
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
