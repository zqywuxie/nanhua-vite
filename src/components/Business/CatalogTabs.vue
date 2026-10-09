<template>
  <div class="catalog-tabs">
    <div ref="navigation" class="catalog-tab-navigation">
      <div class="catalog-desktop-tabs" role="tablist" aria-label="Product information">
        <button v-for="(tab, index) in tabs" :id="`${prefix}-${tab.key}`" :key="tab.key" type="button" role="tab" :aria-selected="modelValue === tab.key" :aria-controls="modelValue === tab.key ? `${prefix}-panel` : undefined" :tabindex="modelValue === tab.key ? 0 : -1" :class="{ active: modelValue === tab.key }" @click="selectTab(tab.key)" @keydown="handleKey($event,index)">{{ tab.label }}</button>
      </div>
      <div class="catalog-mobile-tabs"><label :for="`${prefix}-select`" class="catalog-visually-hidden">Product information section</label><select :id="`${prefix}-select`" :value="modelValue" @change="selectTab($event.target.value)"><option v-for="tab in tabs" :key="tab.key" :value="tab.key">{{ tab.label }}</option></select><MenuChevron /></div>
    </div>
    <div :id="`${prefix}-panel`" ref="panel" class="catalog-tab-panel" role="tabpanel" :aria-label="activeLabel" tabindex="0"><slot /></div>
  </div>
</template>
<script setup>
import { computed, getCurrentInstance, nextTick, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MenuChevron from './MenuChevron.vue';
const props = defineProps({ tabs: { type: Array, required: true }, modelValue: { type: String, required: true } });
const emit = defineEmits(['update:modelValue']);
const route = useRoute();
const router = useRouter();
watch(() => route.query.tab, key => {
  const selected = props.tabs.find(tab => tab.key === key) || props.tabs[0];
  if (selected) emit('update:modelValue', selected.key);
}, { immediate: true });
const prefix = `catalog-tabs-${getCurrentInstance().uid}`;
const navigation = ref(null);
const panel = ref(null);
const activeLabel = computed(() => props.tabs.find(tab => tab.key === props.modelValue)?.label || 'Product information');
async function selectTab(key, focusTab = false) {
  const query = { ...route.query };
  if (key === props.tabs[0]?.key) delete query.tab;
  else query.tab = key;
  await router.push({ path: route.path, query, hash: route.hash });
  emit('update:modelValue',key);
  await nextTick();
  if (focusTab) document.getElementById(`${prefix}-${key}`)?.focus({ preventScroll: true });
  const main = document.querySelector('.layout-container > .main-content');
  if (main && panel.value.getBoundingClientRect().top < main.getBoundingClientRect().top + navigation.value.offsetHeight) panel.value.scrollIntoView({ behavior: 'auto', block: 'start' });
}
function handleKey(event,index) {
  let next;
  if (event.key === 'ArrowRight') next = (index+1)%props.tabs.length;
  else if (event.key === 'ArrowLeft') next = (index+props.tabs.length-1)%props.tabs.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = props.tabs.length-1;
  else return;
  event.preventDefault();
  selectTab(props.tabs[next].key,true);
}
</script>
