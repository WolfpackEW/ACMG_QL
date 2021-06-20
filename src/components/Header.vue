<template>
 <nav>
     <v-toolbar 
      
        color="primary overflow-hidden"
        :elevate-on-scroll="true">
       <v-toolbar-title> 
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
       </v-toolbar-title>
       <v-spacer></v-spacer>
       
        <div class="card">
        {{ message }}
        <button @click="onClick">
        Change
        </button>
        </div> 
    </v-toolbar>
  </nav>
</template>


<script>
export default {
  name: 'Card',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>


