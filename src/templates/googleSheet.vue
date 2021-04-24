<template>
  <Layout>
    <h3>Testing page</h3>
    <div>{{$page.googleSheet.Scientific_Name}}</div>
    <div>{{$page.googleSheet.Common_Name}}</div>
    <div>{{$page.googleSheet.Description}}</div>
    <div>{{$page.googleSheet.Size__height__}}</div>
    <div>{{$page.googleSheet.Size__width_}}</div>
    <div>{{$page.googleSheet.Bloom_Season}}</div>
    <div>{{$page.googleSheet.Pruning_Needs}}</div>
    <div>{{$page.googleSheet.Water_Needs}}</div>
    <div>{{$page.googleSheet.Exposure}}</div>
    <div>{{$page.googleSheet.Type}}</div>
    <div>{{$page.googleSheet.Location}}</div>
    <div>{{$page.googleSheet.ID}}</div>
  </Layout>
</template>

<page-query>
query Sheet ($path: String!) {
  googleSheet(path: $path) {
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
   ID
  }
}
</page-query>
<script>
export default {

}
</script>