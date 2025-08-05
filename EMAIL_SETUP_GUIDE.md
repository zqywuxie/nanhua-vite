# 联系表单邮件服务设置指南

## 📧 功能概述

本系统为联系表单实现了完整的邮件发送功能，支持多种邮件服务提供商，无需后端即可将表单信息发送到指定邮箱。

### ✨ 核心特性

- **多服务支持**：EmailJS、Formspree、Web3Forms、Netlify Forms
- **智能故障转移**：主服务失败时自动尝试备选服务
- **完整验证**：表单字段验证和邮箱格式验证
- **用户友好**：加载状态、成功/错误提示、响应式设计
- **统一样式**：Banner样式与其他页面保持一致

## 🚀 快速开始（推荐：Web3Forms）

### 步骤 1：获取 Access Key

1. 访问 [Web3Forms 官网](https://web3forms.com/)
2. 输入你的邮箱地址（用于接收表单提交）
3. 点击 "Get Access Key"
4. 复制生成的 Access Key

### 步骤 2：配置服务

编辑 `src/utils/emailConfig.js`：

```javascript
export const EMAIL_SERVICES = {
  WEB3FORMS: {
    accessKey: '你的Access Key', // 替换为真实的 Access Key
    endpoint: 'https://api.web3forms.com/submit',
    enabled: true // 设置为 true 启用
  }
}
```

### 步骤 3：测试功能

1. 启动开发服务器：`npm run dev`
2. 访问测试页面：`http://localhost:5174/email_test`
3. 填写测试表单并提交
4. 检查邮箱是否收到测试邮件

### 步骤 4：使用联系表单

访问 `http://localhost:5174/contact_us` 查看完整的联系表单页面。

## 📋 详细配置指南

### 方案一：EmailJS（生产环境推荐）

EmailJS 提供更稳定的服务和更多自定义选项。

#### 设置步骤：

1. **注册账户**
   - 访问 [EmailJS 官网](https://www.emailjs.com/)
   - 注册免费账户（每月 200 封邮件）

2. **创建邮件服务**
   - 登录后点击 "Add New Service"
   - 选择邮件提供商（Gmail、Outlook 等）
   - 连接你的邮箱账户
   - 记录 Service ID

3. **创建邮件模板**
   - 点击 "Email Templates" → "Create New Template"
   - 设置模板内容：
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: 新的联系表单提交
   
   姓名: {{from_name}}
   邮箱: {{from_email}}
   公司: {{company}}
   消息: {{message}}
   ```
   - 记录 Template ID

4. **获取 Public Key**
   - 在 Account 页面找到 Public Key

5. **更新配置**
   ```javascript
   EMAILJS: {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key',
     enabled: true
   }
   ```

### 方案二：Formspree

简单易用的表单处理服务。

#### 设置步骤：

1. **注册账户**
   - 访问 [Formspree 官网](https://formspree.io/)
   - 注册免费账户（每月 50 个提交）

2. **创建表单**
   - 登录后点击 "New Form"
   - 输入接收邮件的地址
   - 记录表单 ID

3. **更新配置**
   ```javascript
   FORMSPREE: {
     formId: 'your_form_id',
     endpoint: 'https://formspree.io/f/your_form_id',
     enabled: true
   }
   ```

### 方案三：Netlify Forms（仅限 Netlify 部署）

如果网站部署在 Netlify 上，可以使用内置的表单处理功能。

#### 设置步骤：

1. **在表单中添加属性**
   - 表单需要 `data-netlify="true"` 属性
   - 添加隐藏字段：`<input type="hidden" name="form-name" value="contact" />`

2. **更新配置**
   ```javascript
   NETLIFY: {
     enabled: true
   }
   ```

## 🔧 文件结构

```
src/
├── views/
│   ├── Contact us/
│   │   └── contact_us.vue          # 联系表单页面（已更新banner样式）
│   └── EmailTest.vue               # 邮件服务测试页面
├── utils/
│   ├── emailConfig.js              # 邮件服务配置
│   └── emailService.js             # 邮件发送逻辑
└── routes/
    └── routes.js                   # 路由配置（已添加测试页面路由）
```

## 🎨 样式更新

### Banner 样式完全统一

联系页面的 banner 现在与其他页面（About Us、Technology）完全保持一致：

#### 统一的尺寸规格
- **桌面端**：450px 高度
- **平板端**：400px 高度（≤900px）
- **移动端**：350px 高度（≤600px）
- **小屏幕**：300px 高度（≤500px）

#### 统一的视觉元素
- **渐变分割线**：使用品牌色彩渐变（#00bc97 到 #4e3fa5）
- **文字阴影**：2px 2px 4px rgba(0, 0, 0, 0.5) 提高可读性
- **背景遮罩**：rgba(0, 0, 0, 0.4) 确保文字清晰可见
- **响应式分割线宽度**：桌面80%，平板75%，移动70%，小屏65%

#### 新增样式类
- `.banner-bg`：背景图片容器
- `.banner-content`：内容覆盖层，包含遮罩效果
- `.banner-text`：文字容器，居中对齐
- `.banner-title`：主标题样式，响应式字体大小
- `.banner-divider`：分割线样式，包含渐变效果
- `.banner-subtitle`：副标题样式，透明度优化

## 🧪 测试功能

### 使用测试页面

访问 `/email_test` 页面可以：

1. **查看服务状态**：显示哪些邮件服务已启用
2. **测试表单提交**：发送测试邮件验证配置
3. **查看测试结果**：显示成功/失败状态和错误信息

### 测试检查清单

- [ ] 至少一个邮件服务显示"启用"状态
- [ ] 测试表单提交成功
- [ ] 收到测试邮件（检查垃圾邮件文件夹）
- [ ] 联系表单正常工作
- [ ] Banner 样式与其他页面一致

## 🔒 安全与最佳实践

### 生产环境配置

1. **使用环境变量**
   ```bash
   # .env 文件
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key
   ```

2. **更新配置文件使用环境变量**
   ```javascript
   EMAILJS: {
     serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
     templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
     enabled: !!import.meta.env.VITE_EMAILJS_SERVICE_ID
   }
   ```

### 安全建议

- 不要在代码中硬编码敏感信息
- 定期检查服务使用量
- 设置适当的表单验证
- 考虑添加验证码防止垃圾邮件

## 📊 服务限制

### 免费计划限制

| 服务 | 免费限制 | 付费升级 |
|------|----------|----------|
| EmailJS | 200封/月 | $15/月起 |
| Formspree | 50个提交/月 | $10/月起 |
| Web3Forms | 1000个提交/月 | 无付费计划 |
| Netlify Forms | 100个提交/月 | $19/月起 |

### 推荐配置

- **开发/测试**：Web3Forms（免费额度最高）
- **小型网站**：Formspree 或 EmailJS
- **企业网站**：EmailJS 付费版
- **Netlify 部署**：Netlify Forms + 备选服务

## 🛠️ 故障排除

### 常见问题

1. **邮件未收到**
   - 检查垃圾邮件文件夹
   - 验证邮件服务配置
   - 查看浏览器控制台错误

2. **表单提交失败**
   - 检查网络连接
   - 验证 API 密钥
   - 查看服务提供商状态页面

3. **配置错误**
   - 使用 `/email_test` 页面验证
   - 检查控制台错误信息
   - 参考服务提供商文档

### 调试步骤

1. 打开浏览器开发者工具
2. 查看 Console 标签的错误信息
3. 检查 Network 标签的请求状态
4. 使用测试页面逐一验证服务

## 📞 技术支持

如果遇到问题：

1. **查看文档**：参考本指南和服务提供商文档
2. **使用测试工具**：利用 `/email_test` 页面诊断
3. **检查状态**：访问服务提供商状态页面
4. **社区支持**：查看 GitHub Issues 或相关论坛

## 🔄 更新日志

### v1.0.0
- ✅ 实现多邮件服务支持
- ✅ 添加智能故障转移
- ✅ 创建测试页面
- ✅ 统一 Banner 样式
- ✅ 完善响应式设计
- ✅ 添加完整文档
