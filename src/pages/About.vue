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
