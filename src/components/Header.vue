<template>
  <nav>
    <v-toolbar
      color="primary overflow-hidden"
      :elevate-on-scroll="true"
      :hide-on-scroll="true"
      dark
    >
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="toggle"
      ></v-app-bar-nav-icon>
      <v-btn text large href="/">
        <v-list-item-avatar>
          <g-image
            src="/favicon.svg"
            height="32"
            width="32"
            fit="contain"
          ></g-image>
        </v-list-item-avatar>
        <span class="headline font-weight-bold">{{
          $static.metadata.siteName
        }}</span>
      </v-btn>

      <v-spacer></v-spacer>
      <!--       <v-btn icon>
        <v-icon>mdi-search</v-icon>
        Search
      </v-btn> -->
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn to="/" text>
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn text to="/about">
          <v-icon>mdi-information-outline</v-icon>
          About</v-btn
        >
        <!-- <v-btn text to="/articles">Articles</v-btn> -->
        <v-btn to="/about" text>
          <v-icon>mdi-contacts</v-icon>
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      absolute
      v-model="collapse"
      :mini-variant.sync="mini"
      class="d-flex d-sm-none dark"
    >
      <v-list-item>
        <v-list-item-avatar>
          <g-image
            src="/favicon.svg"
            height="32"
            width="32"
            fit="contain"
          ></g-image>
        </v-list-item-avatar>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>fa-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      collapse: false,
      items: [
        { title: 'Home', icon: 'mdi-home', path: '/' },
        { title: 'About', icon: 'mdi-information-outline', path: '/about' },
        { title: 'Outstanding Plants of Alameda County', icon: 'mdi-flower-outline', path: '/opac' },
        { title: 'Native Plants', icon: 'mdi-flower-outline', path: '/Natives' },
        { title: 'Mediterranean Plants', icon: 'mdi-flower-outline', path: '/Mediterranean' },
        { title: 'Grasses Plants', icon: 'mdi-flower-outline', path: '/Grasses' },
        { title: 'Sensory Plants', icon: 'mdi-flower-outline', path: '/Sensory' },


        // { title: "Articles", icon: "fa-newspaper", path: "/articles" },
        { title: 'Contact', icon: 'mdi-contacts', path: '/about' },
      ],
      mini: false,
    }
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse
    },
  },
}
</script>
