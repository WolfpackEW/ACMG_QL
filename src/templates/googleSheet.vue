<template>
  <Layout>
    <section id="plant" class="plant-section">
      <v-container>
        <v-img
          contain
          max-height="400"
          max-width="450"
          :src="$page.googleSheet.Img_URL"
          :alt="$page.googleSheet.Common_Name"
        ></v-img>
          <br>
          <h2>{{$page.googleSheet.Common_Name}}</h2>
          <br>
          <div><b>Scientific Name - &nbsp;</b> <em>{{$page.googleSheet.Scientific_Name}}</em> &nbsp; {{$page.googleSheet.Cultivar}} </div>
          <div><b>Description - &nbsp;</b> {{$page.googleSheet.Description}}</div>
          <div><b>Size (height) - &nbsp;</b>  {{$page.googleSheet.Size__height_}}</div>
          <div><b>Size (width) - &nbsp;</b> {{$page.googleSheet.Size__width_}}</div>
          <div><b>Bloom Season - &nbsp;</b> {{$page.googleSheet.Bloom_Season}}</div>
          <div><b>Pruning Needs - &nbsp;</b> {{$page.googleSheet.Pruning_Needs}}</div>
          <div><b>Water Needs - &nbsp;</b> {{$page.googleSheet.Water_Needs}}</div>
          <div><b>Exposure - &nbsp;</b> {{$page.googleSheet.Exposure}}</div>
          <div><b>Type - &nbsp;</b> {{$page.googleSheet.Type}}</div>
          <div><b>Location-TagNum - &nbsp;</b> {{$page.googleSheet.Location}}-{{$page.googleSheet.ID}}</div>
          <div><b>Photo Attribution - &nbsp;</b> {{$page.googleSheet.Attribution}}</div>
          <br>
          <div><g-link :to="$page.googleSheet.Plant_Info_Link"> <b>Additional Plant Info</b></g-link></div>
          <br>
          <div></div>
         <!--
          <div>Img URL - <g-link :to="$page.googleSheet.Img_URL">{{$page.googleSheet.Img_URL}}</g-link></div>
         <v-row>
          <v-col sm="6" class="d-flex flex-column justify-center">
            <g-image :src="$page.googleSheet.Img_URL" /> 
            <div>Img_URL: {{ $page.googleSheet.Img_URL }}</div>
            <g-image :src="$page.googleSheet.Img_URL" />
            <v-img src="https://picsum.photos/300" alt="Plant Image"/>
            <h3>{{ $page.googleSheet.Common_Name }}</h3>
            <div>({{ $page.googleSheet.Scientific_Name }})</div>
            <div>Img_URL: {{ $page.googleSheet.Img_URL }}</div>
            <div>Description: {{ $page.googleSheet.Description }}</div>
            <div>Height: {{ $page.googleSheet.Size_height }}</div>
            <div>Width: {{ $page.googleSheet.Size_width }}</div>
            <div>Exposure: {{ $page.googleSheet.Exposure }}</div>
            <div>Water Needs: {{ $page.googleSheet.Water_Needs }}</div>
            <div>Bloom Season: {{ $page.googleSheet.Bloom_Season }}</div>
            <div>Pruning Needs: {{ $page.googleSheet.Pruning_Needs }}</div>
            <div>Location: {{ $page.googleSheet.Location }}-{{$page.googleSheet.id}}</div>
            <div>Plant Type: {{ $page.googleSheet.Type }}</div>
          </v-col>
        </v-row> 
-->
      <br>
      </v-container>
    </section>
  </Layout>
</template>

<page-query>
query Sheet($path: String!) {
  googleSheet(path: $path) {
    ID
    Full_Name
    Scientific_Name
    Cultivar
    Common_Name
    Description
    Size__height_
    Size__width_
    Location
    Type
    Exposure
    Water_Needs
    Bloom_Season
    Pruning_Needs
    Img_URL
    Attribution
    Plant_Info_Link
  }
}
</page-query>

<script>
export default {}
</script>
