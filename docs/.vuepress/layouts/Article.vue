<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from './Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const articles = useBlogType('article')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList :items="articles.items" style="margin-top: 4rem" is-main-list/>
      </main>
    </template>
  </ParentLayout>
</template>
