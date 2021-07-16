<template>
  <Layout>
    <section id="plant" class="plant-section">
      <v-container>
        <g-image :src="$page.googleSheet.Img_URL" :alt="$page.googleSheet.Common_Name"/> 
          <h3>{{$page.googleSheet.Common_Name}}</h3>
          <div>Scientific Name - {{$page.googleSheet.Scientific_Name}}</div>
          <div>Description - {{$page.googleSheet.Description}}</div>
          <div>Size(height) - {{$page.googleSheet.Size__height_}}</div>
          <div>Size(width) - {{$page.googleSheet.Size__width_}}</div>
          <div>Bloom Season - {{$page.googleSheet.Bloom_Season}}</div>
          <div>Pruning Needs - {{$page.googleSheet.Pruning_Needs}}</div>
          <div>Water Needs - {{$page.googleSheet.Water_Needs}}</div>
          <div>Exposure - {{$page.googleSheet.Exposure}}</div>
          <div>Type - {{$page.googleSheet.Type}}</div>
          <div>Location - {{$page.googleSheet.Location}}-{{$page.googleSheet.ID}}</div>
          <div>Attribution - {{$page.googleSheet.Attribution}}</div>
          <div>Img URL - {{$page.googleSheet.Img_URL}}</div>
<!--         <v-row>
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
        </v-row> -->
      </v-container>
    </section>
  </Layout>
</template>

<page-query>
query Sheet($path: String!) {
  googleSheet(path: $path) {
    ID
    Scientific_Name
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
  }
}
</page-query>

<script>
export default {}
</script>
