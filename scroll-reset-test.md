# 滚动位置重置优化测试指南

## 问题描述
用户反馈：在导航栏进行界面跳转时，前一个界面的滚动位置会影响新界面的显示位置，导致新界面不是从顶部开始显示。

## 解决方案
实施了多层次的滚动位置重置机制：

### 1. 路由级别重置 (`src/routes/router.js`)
- 在 `scrollBehavior` 中强制重置所有可能的滚动容器
- 使用 Promise 确保重置操作完成

### 2. 组件级别重置
#### 主布局 (`src/views/layout.vue`)
- 监听路由变化，立即重置滚动位置
- 在所有导航点击事件中添加滚动重置
- 重置函数覆盖所有可能的滚动容器

#### 子布局重置
- `src/views/Reagent/ReagentLayout.vue`
- `src/views/LifeScience/LifeScienceLayout.vue`
- 在菜单点击事件中添加滚动重置

### 3. 重置策略
- **立即重置**：点击导航时立即执行
- **路由重置**：路由变化时执行
- **延迟重置**：使用 nextTick 和 setTimeout 确保DOM更新后重置
- **多容器重置**：重置所有可能的滚动容器

## 测试步骤

### 测试1：主导航跳转
1. 访问首页，向下滚动一段距离
2. 点击导航栏的 "PRODUCTS" → "Reagent"
3. 验证：新页面应该从顶部开始显示

### 测试2：子菜单跳转
1. 在 Reagent 页面，向下滚动
2. 点击左侧菜单的不同分类
3. 验证：每次跳转都应该重置到顶部

### 测试3：跨布局跳转
1. 在 Reagent 页面向下滚动
2. 点击导航栏跳转到 "Life Science"
3. 验证：Life Science 页面应该从顶部开始

### 测试4：移动端测试
1. 在移动端打开汉堡菜单
2. 选择不同的菜单项
3. 验证：每次跳转都重置滚动位置

## 技术实现细节

### 重置的容器包括：
- `.main-content` - 主内容区域
- `.content-area` - 内容区域
- `.reagent-layout` - Reagent 布局容器
- `.lifescience-layout` - Life Science 布局容器
- `.layout-container` - 主布局容器
- `window` - 整个页面
- `document.body` - body 元素
- `document.documentElement` - html 元素

### 重置时机：
1. 路由变化时（watch route）
2. 导航点击时（所有点击事件）
3. 路由 scrollBehavior 执行时

### 重置方法：
- `element.scrollTop = 0`
- `element.scrollLeft = 0`
- `element.scrollTo(0, 0)`
- `window.scrollTo(0, 0)`

## 预期效果
- ✅ 任何导航跳转都会重置滚动位置到顶部
- ✅ 不会出现新页面保持旧页面滚动位置的问题
- ✅ 用户体验更加一致和友好
