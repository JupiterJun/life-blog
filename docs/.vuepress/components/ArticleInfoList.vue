<script setup lang="ts">
import {withDefaults} from 'vue';

const defaultAuthor = '纾浚';
const defaultLocation = 'anywhere';

const props = withDefaults(defineProps<{
  author?: string,
  location?: string,
  date?: string | Date
}>(), {
  author: defaultAuthor,
  location: defaultLocation,
  date: ''
})
</script>

<template>
  <div class="head-info">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
      </svg>
      <span>{{ props.author || defaultAuthor }}&nbsp;in {{ props.location || defaultLocation }}</span>
    </div>
    <div v-if="props.date">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <span>{{ typeof props.date == 'string' ? props.date : props.date.toISOString().split('T')[0] }}</span>
    </div>
  </div>
</template>

<style scoped>
.head-info {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.8rem;
  color: var(--c-text);

  div {
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
