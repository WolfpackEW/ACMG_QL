<template>
  <Layout>
    <about />
  </Layout>
</template>

<script>
import About from '@/components/About.vue'

export default {
  metaInfo: {
    title: 'Hello, UC Master Gardeners!',
  },
  components: {
    About,
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
body
{
  background: lightblue; 
}
.attribute_container{
  padding: 10px;
  background: white; 
}
</style>
