<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import SidebarItems from '@theme/SidebarItems.vue'
import {usePageData} from "vuepress/client";
import {useSidebarItems} from "@vuepress/theme-default/lib/client/composables/index.js";

defineSlots<{
  'top'?: (props: Record<never, never>) => any
  'bottom'?: (props: Record<never, never>) => any
  'content-top'?: (props: Record<never, never>) => any
  'content-bottom'?: (props: Record<never, never>) => any
}>()

const data = usePageData()
const sidebarItems = useSidebarItems()
console.log(sidebarItems)
</script>

<template>
  <main class="page">
    <slot name="top"/>

    <div class="theme-default-content font-noto-serif-sc">
      <h1>{{ data.title }}</h1>

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
  width: fit-content;
  margin: calc(var(--navbar-height) + 8rem) auto 2rem;
  @media (max-width: 959px) {
    margin: var(--navbar-height) 0 2rem;
  }
  padding: 0 0 2rem;
}

.content-toc {
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  bottom: 0;
  width: 12rem;
  padding: 0;
  overflow-y: auto;
}

@media (max-width: 1300px) {
  .content-toc {
    display: none;
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
    padding-left: 0.6rem;
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
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    padding: 0;
  }

  .sidebar-item-children ul {
    padding-left: 0;
  }
}
</style>