<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const timelines = useBlogType('note')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <h1 class="timeline-title" style="font-family: var(--font-noto-serif-sc)">纸条</h1>

        <ArticleList :items="timelines.items" is-notes />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.timeline-title {
  padding: 0;
  text-align: center;
}
</style>
