import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Tag from './layouts/Tag.vue'
import Note from './layouts/Note.vue'
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
  layouts: {
    Article,
    Tag,
    Note,
    Layout,
  },
})
