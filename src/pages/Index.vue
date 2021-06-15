<template>
  <Layout>

    <h1>Welcome to the Quarry Lakes Demonstration Garden!</h1>
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.id">
    {{page.node.Scientific_Name}}
    {{page.node.Common_Name}}
    </div>
  </Layout>
</template>
<page-query>
    query {
    allGoogleSheet{
      	edges{
          node {
            Scientific_Name
            Common_Name
            Size__width_
            Size__height__
            ID
               }
             }
                  }
           }
</page-query>
<script>
export default {
  metaInfo: {
    title: 'ACMG at Quarry Lakes Demonstration Garden'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
