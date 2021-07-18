<template>
  <div class="layout">
    <!-- <Header /> --> 
   <!--
    <v-btn depressed> 
      Normal 
    </v-btn> 
    -->
    <v-card
      max-width="760">
    <g-image alt="official logo" src="~/footer.jpg" fit="contain" quality="100"/> <!-- width="760" height="200" -->
    </v-card>
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName}}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About Us</g-link>
        <g-link class="nav__link" to="/contact/">Contact Us</g-link>
        <g-link class="nav__link" to="/mediterranean/">Mediterranean</g-link>
        <g-link class="nav__link" to="/grasses/">Grasses</g-link>
        <g-link class="nav__link" to="/natives/">Natives</g-link>
        <g-link class="nav__link" to="/sensory/">Sensory</g-link>
        <g-link class="nav__link" to="/opac/">Outstanding Plants of Alameda County</g-link>
      </nav>
    </header>
    <slot/>
    
    <Footer /> 
  </div> 
</template>
 
 <script>
 export default {}; 
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
  max-width: 800px;
  padding-left: 30px;
  padding-right: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.footer {
  display: flex; 
  justify-content: space-between; 
  align-items:center; 
  margin-bottom: 20px; 
  height: 80px; 
}


.nav__link {
  margin-left: 20px;
}
</style>

