<template>
  <Layout>
    <section id="plant" class="plant-section">
      <v-container>
        <v-row>
          <v-col>
            <g-image
              alt="Prototype image"
              src="~/Arctostaphylos_Sunset-SunsetManzanita.png"
              width="300"
            />
          </v-col>
          <v-col sm="6" class="d-flex flex-column justify-center">
            <h3>{{ $page.plantSheet.Scientific_Name }}</h3>
            <div>Common Name: {{ $page.plantSheet.Common_Name }}</div>
            <div>Description: {{ $page.plantSheet.Description }}</div>
            <div>Height: {{ $page.plantSheet.Size_height }}</div>
            <div>Width: {{ $page.plantSheet.Size_width }}</div>
            <div>Exposure: {{ $page.plantSheet.Exposure }}</div>
            <div>Water Needs: {{ $page.plantSheet.Water_Needs }}</div>
            <div>Bloom Season: {{ $page.plantSheet.Bloom_Season }}</div>
            <div>Pruning Needs: {{ $page.plantSheet.Pruning_Needs }}</div>
            <div>
              Location: {{ $page.plantSheet.Location }}-{{
                $page.plantSheet.id
              }}
            </div>
            <div>Plant Type: {{ $page.plantSheet.Type }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </Layout>
</template>

<page-query>
query Sheet($path: String!) {
  plantSheet(path: $path) {
    id
    Scientific_Name
    Common_Name
    Description
    Size_height
    Size_width
    Location
    Type
    Exposure
    Water_Needs
    Bloom_Season
    Pruning_Needs
  }
}
</page-query>

<script>
export default {}
</script>
