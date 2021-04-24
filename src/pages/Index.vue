<template>
  <Layout>

    <h1>Hello, Master Gardeners!</h1>
    <div v-for= "page in $page.allGoogleSheet.edges" :key= "page.id">
    {{page.node.Scientific_Name}}
    {{page.node.Common_Name}}
    {{page.node.Size__width_}}
    {{page.node.Size__height__}}
    {{page.node.ID}}

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
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
