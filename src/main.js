// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import Card from '~/components/Card.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
Vue.component('Card', Card)
Vue.component('Footer', Footer)
Vue.component('Header', Header)
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto'
  })
  //Vue.component('Menu', Menu)
}
