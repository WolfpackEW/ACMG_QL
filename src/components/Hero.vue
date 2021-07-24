<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-img :src="heroData.hero.heroImgSrc"></v-img>
      <v-col />
      <v-col>
        <h1 class="display-1 font-weight-regular mb-1 text-center">
          {{ heroData.hero.heroTitle }}
        </h1>
        <br />
        <h4 class="subheading text-center">{{ heroData.hero.heroSubtitle }}</h4>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
import heroData from '~/data/hero.yml'
export default {
  data() {
    return {
      heroData,
    }
  },
}
</script>
