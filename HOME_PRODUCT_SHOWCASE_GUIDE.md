# 🏠 主页产品展示模块 - 三模块分离设计指南

## 📋 设计概述

基于用户需求，我重新设计了主页的产品展示模块，将三个种类模块（Reagent、Life Science、Instruments）完全分开展示。每个模块都有自己独立的左右布局，采用一左一右一左的交替展示方式，每个模块内部左边展示大类产品导航，右边展示选中大类下的小类产品。

## 🎯 设计目标

### 三模块分离展示
- **Reagent 模块**：左侧导航，右侧展示（第一个模块）
- **Life Science 模块**：右侧导航，左侧展示（第二个模块，交替布局）
- **Instruments 模块**：左侧导航，右侧展示（第三个模块）

### 每个模块的内部结构
- **左侧/右侧导航**：显示该模块下的大类产品分类
- **右侧/左侧展示**：显示选中大类下的具体小类产品
- **交互切换**：点击大类导航切换显示不同的小类产品

### 核心特色
- **独立模块**：三个模块完全独立，各有自己的数据和状态
- **交替布局**：一左一右一左的视觉节奏，避免单调
- **层级清晰**：大类 → 小类的产品层级结构清晰明了

## 🏗️ 三模块分离的结构设计

### HTML 结构

```html
<section class="products-showcase-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Products & Solutions</h2>
      <p class="section-desc">Comprehensive biotechnology solutions across three major categories</p>
    </div>

    <!-- Reagent 模块 - 左侧导航，右侧展示 -->
    <div class="product-module reagent-module layout-left">
      <div class="module-nav">
        <div class="nav-header">
          <h3 class="nav-title">Reagent</h3>
          <p class="nav-subtitle">Diagnostic Materials & Reagents</p>
        </div>
        <div class="nav-menu">
          <!-- 大类导航：Chemiluminescence, Homogeneous Luminescence, etc. -->
        </div>
      </div>
      <div class="module-display">
        <!-- 选中大类下的小类产品展示 -->
      </div>
    </div>

    <!-- Life Science 模块 - 右侧导航，左侧展示 -->
    <div class="product-module lifescience-module layout-right">
      <div class="module-display">
        <!-- 选中大类下的小类产品展示 -->
      </div>
      <div class="module-nav">
        <div class="nav-header">
          <h3 class="nav-title">Life Science</h3>
          <p class="nav-subtitle">Research Solutions & Tools</p>
        </div>
        <div class="nav-menu">
          <!-- 大类导航：Chromatography Media, Protein Purification, etc. -->
        </div>
      </div>
    </div>

    <!-- Instruments 模块 - 左侧导航，右侧展示 -->
    <div class="product-module instruments-module layout-left">
      <div class="module-nav">
        <div class="nav-header">
          <h3 class="nav-title">Instruments</h3>
          <p class="nav-subtitle">Advanced Instrumentation</p>
        </div>
        <div class="nav-menu">
          <!-- 大类导航：Digital PCR Systems, Thermal Cyclers, etc. -->
        </div>
      </div>
      <div class="module-display">
        <!-- 选中大类下的小类产品展示 -->
      </div>
    </div>
  </div>
</section>
```

### 三模块独立的数据结构

```javascript
// 三个模块的独立状态
const activeReagent = ref(0);
const activeLifeScience = ref(0);
const activeInstrument = ref(0);

// Reagent 模块数据
const reagentCategories = ref([
  {
    name: "Chemiluminescence",
    title: "Chemiluminescent Magnetic Beads",
    description: "High-performance magnetic beads for chemiluminescent immunoassays...",
    link: "/reagent/chemiluminescence",
    products: [
      { name: "CLIA Magnetic Beads", image: digitalPcrKit, link: "/reagent/chemiluminescence/magnetic_beads" },
      { name: "Streptavidin Beads", image: sangerSequencing, link: "/reagent/chemiluminescence/streptavidin_beads" }
    ]
  },
  // 更多 Reagent 大类...
]);

// Life Science 模块数据
const lifeScienceCategories = ref([
  {
    name: "Chromatography Media",
    title: "Protein Purification Media",
    description: "High-quality chromatography media for protein purification...",
    link: "/life_science/chromatography_media",
    products: [
      { name: "Gel Filtration", image: ngsLibrarySystem, link: "/life_science/chromatography_media/gel_filtration" },
      { name: "Ion Exchange", image: digitalPcrKit, link: "/life_science/chromatography_media/ion_exchange" }
    ]
  },
  // 更多 Life Science 大类...
]);

// Instruments 模块数据
const instrumentCategories = ref([
  {
    name: "Digital PCR Systems",
    title: "Digital PCR Platforms",
    description: "Advanced digital PCR systems for absolute quantification...",
    link: "/instruments/digital_pcr",
    products: [
      { name: "SCI Digital PRO", image: digitalPcrKit, link: "/instrumentDetail/SCI_Digital_PRO" },
      { name: "ISO Digital", image: sangerSequencing, link: "/instrumentDetail/ISO_Digital" }
    ]
  },
  // 更多 Instruments 大类...
]);
```

## 🎨 三模块的视觉设计

### 模块布局设计

#### 交替布局模式
- **Reagent 模块**：`.layout-left` - 左侧导航，右侧展示
- **Life Science 模块**：`.layout-right` - 右侧导航，左侧展示
- **Instruments 模块**：`.layout-left` - 左侧导航，右侧展示

#### 模块容器样式
```css
.product-module {
  display: flex;
  align-items: stretch;
  margin-bottom: 100px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 500px;
}
```

### 导航区域设计

#### 导航容器
- **宽度**：固定 350px
- **背景**：深色渐变 (#2c3e50 到 #34495e)
- **内边距**：40px，营造舒适的空间感

#### 导航标题
- **主标题**：2.2rem，白色，700字重
- **副标题**：1.1rem，半透明白色，描述性文字

#### 导航菜单
```css
.nav-menu a {
  display: block;
  padding: 20px 25px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid transparent;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: white;
  border-color: #00bc97;
  transform: translateX(10px);
}
```

### 展示区域设计

#### 展示容器
- **弹性布局**：flex: 1，占据剩余空间
- **内边距**：50px，确保内容不贴边
- **背景**：纯白色，与导航区形成对比

#### 子分类标题
- **主标题**：2rem，深色，700字重
- **描述文字**：1.1rem，中等灰色，1.6行高

#### 产品网格
```css
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  flex: 1;
  margin-bottom: 40px;
}
```

#### 产品项目
- **背景**：浅灰色 (#f8f9fa)
- **圆角**：15px
- **悬停效果**：上浮5px + 阴影增强
- **图片高度**：150px，保持统一

## 🔄 交互功能

### 分类切换
```javascript
const activeCategory = ref(0);

const switchCategory = (index) => {
  activeCategory.value = index;
};
```

### 显示逻辑
- 使用 `v-show` 或 CSS 类控制显示/隐藏
- 只显示当前激活分类的内容
- 平滑的淡入淡出效果

### 悬停效果
- **图片悬停**：缩放效果 + 覆盖层显示
- **按钮悬停**：上浮效果 + 阴影增强
- **导航悬停**：背景渐变 + 位移效果

## 📱 响应式设计

### 桌面端 (>1200px)
- **布局**：左右分栏，60px 间距
- **导航**：垂直排列，完整显示
- **展示**：2列产品网格

### 平板端 (≤1200px)
- **布局**：上下排列，40px 间距
- **导航**：水平滚动，紧凑排列
- **展示**：保持2列网格

### 移动端 (≤768px)
- **布局**：单列布局
- **导航**：水平滚动条
- **展示**：单列产品展示
- **间距**：减少内边距

### 小屏幕 (≤480px)
- **导航**：更紧凑的按钮尺寸
- **图片**：降低高度至150px
- **按钮**：较小的字体和内边距

## 🎯 三模块的产品分类内容

### 1. Reagent 模块
**模块定位**：诊断材料与试剂解决方案

#### 大类分类：
- **Chemiluminescence**：化学发光磁珠
  - 小类产品：CLIA Magnetic Beads, Streptavidin Beads
- **Homogeneous Luminescence**：均相发光检测
  - 小类产品：Donor Beads, Acceptor Beads
- **Molecular Diagnosis**：分子诊断试剂
  - 小类产品：PCR Reagents, Extraction Kits
- **Flow Beads**：流式细胞术微球
  - 小类产品：Fluorescent Beads, Calibration Beads

### 2. Life Science 模块
**模块定位**：生命科学研究解决方案

#### 大类分类：
- **Chromatography Media**：层析介质
  - 小类产品：Gel Filtration, Ion Exchange
- **Protein Purification**：蛋白纯化系统
  - 小类产品：Purification Kits, Columns
- **Homogeneous Luminescence**：均相发光检测试剂盒
  - 小类产品：Detection Kits, Screening Kits
- **Cell Sorting**：细胞分选与激活
  - 小类产品：Cell Sorting Beads, Activation Reagents

### 3. Instruments 模块
**模块定位**：先进仪器设备

#### 大类分类：
- **Digital PCR Systems**：数字PCR平台
  - 小类产品：SCI Digital PRO, ISO Digital
- **Thermal Cyclers**：PCR热循环仪
  - 小类产品：SCI Cycler, Gradient Cycler
- **Sample Preparation**：样品制备系统
  - 小类产品：DigitalFuge, Extraction System
- **Detection Systems**：检测分析系统
  - 小类产品：Fluorescence Reader, Plate Reader

## 🔧 技术实现

### Vue 3 组合式 API
```javascript
import { ref } from 'vue';

// 响应式数据
const activeCategory = ref(0);
const productCategories = ref([...]);

// 方法
const switchCategory = (index) => {
  activeCategory.value = index;
};
```

### CSS 动画
- **过渡效果**：使用 `transition` 属性
- **变换效果**：`transform` 实现位移和缩放
- **渐变背景**：`linear-gradient` 创建品牌色渐变

### 图片优化
- **懒加载**：可考虑添加图片懒加载
- **响应式图片**：使用 `object-fit: cover` 保持比例
- **加载状态**：可添加加载占位符

## 📊 性能优化

### 图片优化
- 使用适当的图片格式（WebP、AVIF）
- 压缩图片文件大小
- 实现图片懒加载

### CSS 优化
- 使用 CSS 变量管理颜色和尺寸
- 避免重复的样式定义
- 使用 GPU 加速的 CSS 属性

### JavaScript 优化
- 避免频繁的 DOM 操作
- 使用防抖处理快速切换
- 预加载下一个分类的内容

## 🎉 设计亮点

### 1. 视觉统一
- 与整站设计风格保持一致
- 使用统一的品牌色彩和字体
- 保持合适的间距和比例

### 2. 交互友好
- 清晰的视觉反馈
- 平滑的动画过渡
- 直观的操作逻辑

### 3. 内容丰富
- 每个分类都有详细描述
- 产品图片直观展示
- 便于用户了解和选择

### 4. 技术先进
- 现代化的 CSS 技术
- Vue 3 组合式 API
- 完善的响应式设计

## 🔄 后续优化建议

### 功能增强
- 添加产品轮播功能
- 实现图片放大查看
- 增加产品对比功能

### 性能提升
- 实现虚拟滚动
- 添加图片预加载
- 优化动画性能

### 用户体验
- 添加键盘导航支持
- 实现无障碍访问
- 增加加载状态提示

---

**🎯 新的产品展示模块成功将原有的简单卡片布局升级为现代化的交互式展示，提升了用户体验和视觉效果！**
