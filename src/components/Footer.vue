<template>
  <v-footer absolute dark padless class="mt-5">
    <v-card
      flat
      tile
      class="primary white--text text-center align-self-md-stretch"
      width="100%"
    >
      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} —
        <strong>Regents of the University of California</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
}
</script>
