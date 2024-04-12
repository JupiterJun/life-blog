<script setup>
import ArticleInfoList from "./ArticleInfoList.vue";
import ArticleTagList from "./ArticleTagList.vue";

const props = defineProps({
  /** Article items */
  items: {
    type: Array,
    required: true,
  },
  /** Whether is timeline or not */
  isTimeline: Boolean,
})
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!items.length">暂时还没有内容TT</div>

    <article
        v-for="({ info, path },i) in items"
        :key="path"
        class="article"
        @click="$router.push(path)"
    >
      <div style="display: flex; align-items: center; gap: 0.4rem">
        <header class="title">
          {{
            (isTimeline ? `${new Date(info.date).toLocaleDateString()}: ` : '') +
            info.title
          }}
        </header>
        <Badge type="tip" text="置顶" vertical="middle" v-if="info.sticky"/>
      </div>

      <ArticleTagList :tags="info.tag" style="margin: 0.6rem 0"/>

      <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt"/>

      <ArticleInfoList :author="info.author" :location="info.location"
                       :date="new Date(info.date).toLocaleDateString()"/>

      <hr v-if="i+1<items.length"/>
    </article>
  </div>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.article-wrapper {
  @include mixins.content_wrapper;
  text-align: center;
}

.article {
  position: relative;

  box-sizing: border-box;

  width: 100%;
  margin: 0 auto 0;
  padding: 0 1.25rem;
  color: var(--c-text);

  text-align: start;

  @media (max-width: 419px) {
    border-radius: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .title {
    position: relative;

    font-family: var(--font-noto-serif-sc);

    display: inline-block;

    font-size: 1.28rem;
    font-weight: 500;
    line-height: 2rem;

    transition: color 0.2s ease-in-out;

    &::after {
      content: '';

      position: absolute;
      bottom: 0;
      inset-inline-start: 0;

      width: 100%;
      height: 1.5px;

      background: var(--c-brand);

      visibility: hidden;

      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }

    &:hover {
      color: var(--c-text-accent);

      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }

    a {
      color: inherit;
    }
  }

  .excerpt {
    font-family: var(--font-noto-serif-sc);
    color: var(--c-text-quote);

    h1 {
      display: none;
    }

    h2 {
      font-size: 1.1em;
      margin-top: 1em;
      margin-bottom: 0.4em;
      padding-bottom: 0;
      border: none;
    }

    h3 {
      font-size: 1em;
      margin-top: 1em;
      margin-bottom: 0.4em;
    }

    p {
      font-size: 1em;
      line-height: 1;
      margin-top: 0.4em;
      margin-bottom: 0.4em;
    }

    a {
      color: var(--c-text-quote);
      border-bottom: 1px solid var(--c-text-quote);
    }
  }

  hr {
    margin: 2rem 0;
  }
}
</style>
