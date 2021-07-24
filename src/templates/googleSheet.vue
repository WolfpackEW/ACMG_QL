<template>
  <Layout>
    <section id="plant" class="plant-section">
    <v-container>
    <!-- If you want to add a photo, non dynamically from the google sheets, then use <g-image src="~/pathname" width="x"/> -->
    <!--<v-card width="400" height="400">-->
    <g-image :src="$page.googleSheet.Img_URL" fit="inside"/> 
    <!--</v-card>-->
      <div class="attribute_container">
        <h3>{{$page.googleSheet.Common_Name}}</h3>
         <!--  <div>Scientific Name:  {{$page.googleSheet.Scientific_Name}}</div> -->
          
          <div class="container-name"> 
            Scientific Name:  
            <div :class="[italic]">{{$page.googleSheet.Main_Name}}</div>
            <div> {{$page.googleSheet.Name_Extension}}</div>
          </div> 
          <!--
        <div :class="[italic]">Main Name: {{$page.googleSheet.Main_Name}}</div> 
          <div>Name Extension: {{$page.googleSheet.Name_Extension}}</div> 
          -->
          <div>Description:  {{$page.googleSheet.Description}}</div> 
          <div>Size(height):  {{$page.googleSheet.Size__height_}}</div>
          <div>Size(width):  {{$page.googleSheet.Size__width_}}</div>
          <div>Bloom Season:  {{$page.googleSheet.Bloom_Season}}</div>
          <div>Pruning Needs:  {{$page.googleSheet.Pruning_Needs}}</div>
          <div>Water Needs:  {{$page.googleSheet.Water_Needs}}</div>
          <div>Exposure:  {{$page.googleSheet.Exposure}}</div>
          <div>Type:  {{$page.googleSheet.Type}}</div>
          <div>Location:  {{$page.googleSheet.Location}}</div>
          <div>ID Number:  {{$page.googleSheet.ID}}</div>
         <!--
          <div>Img URL:  {{$page.googleSheet.Img_URL}}</div>
          -->
          <div>Attribution: {{$page.googleSheet.Attribution}}</div>
          <br>
          <br>
         <!-- 
          <div>Links: {{$page.googleSheet.Links}}</div> 
          --> 
        <!--  <div>Unique ID - {{$page.googleSheet.Unique_ID}}</div> -->
      </div>
      </v-container>
    </section>
  </Layout >
</template>

<page-query>
query Sheet ($path: String!) {
  googleSheet(path: $path) {
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
  } 
</style>