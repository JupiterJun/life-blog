<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import SidebarItems from '@theme/SidebarItems.vue'
import {usePageData} from "vuepress/client";
import {useSidebarItems} from "@vuepress/theme-default/lib/client/composables/index.js";
import {useThemeLocaleData} from "@vuepress/theme-default/lib/client/composables/index.js";

defineSlots<{
  'top'?: (props: Record<never, never>) => any
  'bottom'?: (props: Record<never, never>) => any
  'content-top'?: (props: Record<never, never>) => any
  'content-bottom'?: (props: Record<never, never>) => any
}>()

const data = usePageData()
const sidebarItems = useSidebarItems()
const themeLocale = useThemeLocaleData()
console.log(sidebarItems)
</script>

<template>
  <main class="page">
    <slot name="top"/>

    <div class="theme-default-content">
      <h1>{{ data.title }}</h1>

      <div class="head-info">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          <span>{{ data.frontmatter.author || '纾浚' }}&nbsp;in {{ data.frontmatter.location || 'anywhere' }}</span>
        </div>
        <div v-if="data.frontmatter.date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>{{ data.frontmatter.date.split('T')[0] }}</span>
        </div>
      </div>

      <slot name="content-top"/>

      <Content class="inner-content"/>

      <slot name="content-bottom"/>
    </div>


    <PageMeta/>

    <PageNav/>

    <slot name="bottom"/>
  </main>
  <div class="content-toc" v-if="sidebarItems.length">
    <!--    <p class="toc-title">{{sidebarItems[0].text}}</p>-->
    <SidebarItems :items="sidebarItems[0].children"/>
  </div>
</template>

<style scoped>
.page {
  box-shadow: 0 10px 20px rgba(0, 0, 0, .05), 0 6px 6px rgba(0, 0, 0, .07);
  border-radius: 4px;
  width: fit-content;
  margin: calc(var(--navbar-height) + 8rem) auto 2rem;
  @media (max-width: 1300px) {
    margin: calc(var(--navbar-height) + 8rem) 4rem 2rem;
  }
  @media (max-width: 959px) {
    margin: var(--navbar-height) 0 2rem;
    width: 100%;
  }
  padding: 0 0 2rem;
}

.theme-default-content{
  font-family: var(--font-noto-serif-sc);;
}

.content-toc {
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  bottom: 0;
  width: 12rem;
  height: fit-content;
  overflow-y: auto;
  padding: 1rem 0 0.6rem 1rem;
  @media (max-width: 1100px) {
    box-shadow: -2px 6px 6px rgba(0, 0, 0, .07);
    border-bottom-left-radius: 4px;
    background: var(--c-bg);
  }
  @media (max-width: 719px) {
    display: none;
  }
}

.head-info {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.8rem;
  color: var(--c-text);
  div{
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
  svg {
    color: #999999;
    width: 1rem;
    height: 1rem;
  }
}
</style>

<style>
.inner-content {
  h1 {
    display: none;
  }
}

.content-toc {
  ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0.4rem;
  }

  li a {
    font-size: 0.8rem !important;
    padding: 0.1rem 1rem 0.1rem 1rem !important;
    transition: border-left-color 0.3s ease;
    border-left: 2px solid transparent;
    font-weight: 400;
  }

  .sidebar-heading {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    padding: 0;
  }

  .sidebar-item-children ul {
    padding-left: 0;
  }
}
</style>