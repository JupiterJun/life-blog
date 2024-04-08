import Layout from "./Layout.vue";
import './style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData}) {
    console.log(router, siteData)
  }
};
