
<template>
<v-card width="300">
  <v-footer 
  absolute
  class ="font-weight-medium"
  >    <!--  <g-image src="~/footer.jpg" position="bottom" quality="100" fit="contain"/> --> 
      <v-col
      class="text-center"
      cols="12"
      >
      <div>&copy; {{ new Date().getFullYear() }} Regents of the University of California</div>
      </v-col>
   </v-footer>
  </v-card> 
</template>

<script> 
export default{}; 
</script> 