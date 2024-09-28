<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="tag-list" v-if="props.tags.length !== 0">
    <span v-for="tag in props.tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
</template>

<style scoped>
.tag-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.5rem;
  height: 1.1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--vp-c-accent);
  color: var(--vp-c-accent);
  font-size: 0.8rem;
}
</style>
