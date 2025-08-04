<template>
  <div class="mobile-optimized-tabs">
    <!-- 移动端下拉选择器 -->
    <div v-if="isMobile" class="mobile-tab-selector">
      <select 
        :value="modelValue" 
        @change="$emit('update:modelValue', $event.target.value)"
        class="mobile-select"
      >
        <option v-for="tab in tabs" :key="tab.key" :value="tab.key">
          {{ tab.label }}
        </option>
      </select>
      <div class="select-arrow">▼</div>
    </div>

    <!-- 桌面端Tab导航 -->
    <div v-else class="desktop-tab-nav">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-item', { active: modelValue === tab.key }]"
        @click="$emit('update:modelValue', tab.key)"
      >
        {{ tab.label }}
      </div>
    </div>

    <!-- Tab内容区域 -->
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])

const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 900
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.mobile-optimized-tabs {
  width: 100%;
}

/* 移动端选择器样式 */
.mobile-tab-selector {
  position: relative;
  margin-bottom: 20px;
}

.mobile-select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  font-size: 1rem;
  border: 2px solid #2b7bbf;
  border-radius: 8px;
  background: white;
  color: #2b7bbf;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}

.mobile-select:focus {
  border-color: #1e5a8a;
  box-shadow: 0 0 0 3px rgba(43, 123, 191, 0.1);
}

.select-arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #2b7bbf;
  pointer-events: none;
  font-size: 0.8rem;
}

/* 桌面端Tab导航样式 */
.desktop-tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e0e4ea;
  flex-wrap: wrap;
}

.tab-item {
  font-size: 1.1rem;
  color: #204a6d;
  padding: 8px 24px 10px 24px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-color 0.2s, font-weight 0.2s;
  white-space: nowrap;
}

.tab-item.active {
  color: #1a2a3a;
  font-weight: 700;
  border-bottom: 2.5px solid #204a6d;
  background: #f7f9fb;
}

.tab-item:hover {
  color: #2b7bbf;
}

.tab-content {
  width: 100%;
}

/* 移动端优化 */
@media (max-width: 900px) {
  .desktop-tab-nav {
    display: none;
  }
}

@media (min-width: 901px) {
  .mobile-tab-selector {
    display: none;
  }
}

/* 小屏幕优化 */
@media (max-width: 600px) {
  .mobile-select {
    font-size: 0.9rem;
    padding: 10px 36px 10px 14px;
  }
}
</style>
