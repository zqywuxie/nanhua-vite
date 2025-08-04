// 这个脚本用于批量更新页面以使用移动端优化组件
// 使用方法：在需要优化的页面中手动应用以下更改

export const mobileOptimizationGuide = {
  // 1. 在template中包装内容
  templateWrapper: `
    <template>
      <MobileOptimizedContent>
        <!-- 原有内容 -->
      </MobileOptimizedContent>
    </template>
  `,

  // 2. 对于有Tab的页面，替换Tab导航
  tabReplacement: `
    <!-- 替换原有的 tab-nav -->
    <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
      <!-- Tab内容 -->
    </MobileOptimizedTabs>
  `,

  // 3. 在script中导入组件
  scriptImports: `
    import MobileOptimizedContent from '@/components/MobileOptimizedContent.vue';
    import MobileOptimizedTabs from '@/components/MobileOptimizedTabs.vue'; // 如果有Tab
  `,

  // 4. 移除或简化移动端CSS
  cssCleanup: `
    /* 移动端样式现在由 MobileOptimizedContent 组件处理 */
    /* 可以移除 @media (max-width: 900px) 等移动端样式 */
  `,

  // 需要优化的页面列表
  pagesToUpdate: [
    // Reagent pages
    'src/views/Reagent/HomogeneousLuminescence.vue',
    'src/views/Reagent/MolecularDiagnosis.vue',
    'src/views/Reagent/LateralChromatography.vue',
    'src/views/Reagent/LatexTurbidimetry.vue',
    'src/views/Reagent/FlowBeads.vue',
    'src/views/Reagent/StandardBeads.vue',
    
    // LifeScience pages
    'src/views/LifeScience/ProteinPurification.vue',
    'src/views/LifeScience/HomogeneousLuminescence.vue',
    'src/views/LifeScience/CellSortingActivation.vue',
    'src/views/LifeScience/NanoFlowCytometer.vue',
    
    // 具体产品页面
    'src/views/Reagent/ChemiluminescentMagneticBeads.vue',
    'src/views/Reagent/DonorAcceptorBeads.vue',
    'src/views/LifeScience/GelFiltration.vue',
    'src/views/LifeScience/IonExchange.vue',
    // ... 更多页面
  ]
};

// 检查页面是否需要Tab组件的函数
export function needsTabComponent(content) {
  return content.includes('tab-nav') || 
         content.includes('currentTab') || 
         content.includes('tabs');
}

// 检查页面是否已经优化的函数
export function isAlreadyOptimized(content) {
  return content.includes('MobileOptimizedContent');
}

console.log('移动端优化指南已加载');
console.log('请手动应用这些更改到需要优化的页面中');
