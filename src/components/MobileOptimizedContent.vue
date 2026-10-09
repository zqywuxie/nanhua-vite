<template>
  <div class="mobile-optimized-content">
    <slot />
  </div>
</template>

<script setup>
// 这个组件主要通过CSS提供移动端优化
</script>

<style scoped>
.mobile-optimized-content {
  width: 100%;
  max-width: 100%;
  overflow-x: clip;
}

/* 基础移动端优化 */
@media (max-width: 900px) {
  .mobile-optimized-content {
    padding: 0;
  }

  /* 标题优化 */
  .mobile-optimized-content :deep(.main-title) {
    font-size: 1.8rem !important;
    margin-bottom: 20px !important;
    padding: 0 8px !important;
    line-height: 1.3 !important;
  }

  /* Tab导航移动端优化 */
  .mobile-optimized-content :deep(.tab-nav) {
    flex-wrap: wrap !important;
    gap: 8px !important;
    margin-bottom: 20px !important;
    padding: 0 8px !important;
    justify-content: flex-start !important;
  }

  .mobile-optimized-content :deep(.tab-item) {
    font-size: 0.9rem !important;
    padding: 8px 12px !important;
    border-radius: 20px !important;
    background: #f0f4f8 !important;
    border: 1px solid #d1d9e0 !important;
    white-space: nowrap !important;
    min-width: auto !important;
    flex: none !important;
  }

  .mobile-optimized-content :deep(.tab-item.active) {
    background: #2b7bbf !important;
    color: white !important;
    border-color: #2b7bbf !important;
  }

  /* 内容区域优化 */
  .mobile-optimized-content :deep(.section-title) {
    font-size: 1.1rem !important;
    margin: 20px 8px 12px 8px !important;
    padding-left: 12px !important;
  }

  /* 段落和文本优化 */
  .mobile-optimized-content :deep(p) {
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 12px 8px !important;
    text-align: justify !important;
  }

  /* 列表优化 */
  .mobile-optimized-content :deep(ul),
  .mobile-optimized-content :deep(ol) {
    padding-left: 20px !important;
    margin: 12px 8px !important;
  }

  .mobile-optimized-content :deep(li) {
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
    margin-bottom: 8px !important;
  }

  /* 图片优化 */
  .mobile-optimized-content :deep(.intro-img),
  .mobile-optimized-content :deep(.preview-img) {
    max-width: calc(100vw - 32px) !important;
    width: 100% !important;
    height: auto !important;
    margin: 12px auto !important;
    border-radius: 6px !important;
  }

  .mobile-optimized-content :deep(.intro-imgs) {
    gap: 16px !important;
    margin: 16px 8px !important;
  }

  /* 链接优化 */
  .mobile-optimized-content :deep(a) {
    word-break: break-all !important;
    line-height: 1.5 !important;
  }

  .mobile-optimized-content :deep(.trial-link) {
    display: block !important;
    text-align: center !important;
    margin: 16px 8px !important;
    padding: 12px 16px !important;
    font-size: 0.95rem !important;
  }

  /* 分隔线优化 */
  .mobile-optimized-content :deep(.divider) {
    margin: 20px 8px !important;
  }

  /* 表格优化（如果有的话） */
  .mobile-optimized-content :deep(table) {
    width: 100% !important;
    font-size: 0.85rem !important;
    overflow-x: auto !important;
    display: block !important;
    white-space: nowrap !important;
  }

  .mobile-optimized-content :deep(th),
  .mobile-optimized-content :deep(td) {
    padding: 8px 4px !important;
    min-width: 80px !important;
  }
}

@media (max-width: 600px) {
  .mobile-optimized-content :deep(.main-title) {
    font-size: 1.5rem !important;
  }

  .mobile-optimized-content :deep(.tab-item) {
    font-size: 0.85rem !important;
    padding: 6px 10px !important;
  }

  .mobile-optimized-content :deep(p) {
    font-size: 0.9rem !important;
  }

  .mobile-optimized-content :deep(li) {
    font-size: 0.85rem !important;
  }
}
</style>
