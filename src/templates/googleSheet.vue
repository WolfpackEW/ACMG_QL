<template>
  <Layout>
    <v-container> 
      <g-image alt ="Testing image" src="~/californian_poppy.jpg" width="300"/>
      <h3>{{$page.googleSheet.Common_Name}}</h3>
        <div>Scientific Name - {{$page.googleSheet.Scientific_Name}}</div>
        <div>Description - {{$page.googleSheet.Description}}</div>
        <div>Size(height) - {{$page.googleSheet.Size__height__}}</div>
        <div>Size(width) - {{$page.googleSheet.Size__width_}}</div>
        <div>Bloom Season - {{$page.googleSheet.Bloom_Season}}</div>
        <div>Pruning Needs - {{$page.googleSheet.Pruning_Needs}}</div>
        <div>Water Needs - {{$page.googleSheet.Water_Needs}}</div>
        <div>Exposure - {{$page.googleSheet.Exposure}}</div>
        <div>Type - {{$page.googleSheet.Type}}</div>
        <div>Location - {{$page.googleSheet.Location}}</div>
        <div>ID Number - {{$page.googleSheet.ID}}</div>
    </v-container> 
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