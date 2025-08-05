# 🚀 联系表单邮件功能 - 5分钟快速开始

## 立即测试（推荐：Web3Forms）

### 第1步：获取免费 Access Key ⏱️ 1分钟

1. 打开 [Web3Forms](https://web3forms.com/)
2. 输入你的邮箱地址（接收表单提交的邮箱）
3. 点击 "Get Access Key"
4. 复制生成的 Access Key

### 第2步：更新配置 ⏱️ 1分钟

编辑 `src/utils/emailConfig.js` 文件，找到 WEB3FORMS 配置：

```javascript
// 找到这一部分并替换 accessKey
WEB3FORMS: {
  accessKey: '粘贴你刚才获取的Access Key', // 替换这里
  endpoint: 'https://api.web3forms.com/submit',
  enabled: true // 确保设置为 true
}
```

### 第3步：测试功能 ⏱️ 2分钟

1. **启动开发服务器**（如果还没启动）：
   ```bash
   npm run dev
   ```

2. **打开测试页面**：
   - 访问：`http://localhost:5174/email_test`
   - 应该看到 Web3Forms 显示为"启用"状态

3. **发送测试邮件**：
   - 填写测试表单
   - 点击"测试发送"
   - 等待成功提示

4. **检查邮箱**：
   - 查看你的邮箱（包括垃圾邮件文件夹）
   - 应该收到测试邮件

### 第4步：使用联系表单 ⏱️ 1分钟

访问 `http://localhost:5174/contact_us` 查看完整的联系表单页面。

## ✅ 成功标志

如果看到以下情况，说明配置成功：

- [ ] 测试页面显示 Web3Forms "启用"
- [ ] 测试表单提交显示"成功"
- [ ] 收到测试邮件
- [ ] 联系表单页面正常显示
- [ ] Banner 样式与其他页面一致

## 🔧 如果遇到问题

### 常见问题解决：

1. **没收到邮件**
   - 检查垃圾邮件文件夹
   - 确认邮箱地址正确
   - 等待几分钟（有时会延迟）

2. **显示"失败"状态**
   - 检查 Access Key 是否正确复制
   - 确认网络连接正常
   - 查看浏览器控制台错误信息

3. **页面无法访问**
   - 确认开发服务器正在运行
   - 检查端口号是否正确（可能是 5173 或 5174）

### 备选方案：Formspree

如果 Web3Forms 不工作，可以尝试 Formspree：

1. 访问 [Formspree](https://formspree.io/)
2. 注册账户并创建表单
3. 获取表单 ID
4. 在 `emailConfig.js` 中启用 Formspree：

```javascript
FORMSPREE: {
  formId: '你的表单ID',
  endpoint: 'https://formspree.io/f/你的表单ID',
  enabled: true
}
```

## 📚 更多功能

配置成功后，你可以：

- **查看详细文档**：`EMAIL_SETUP_GUIDE.md`
- **配置多个服务**：作为备选方案
- **自定义邮件模板**：使用 EmailJS
- **部署到生产环境**：使用环境变量

## 🎯 下一步

1. **测试所有功能**：确保表单验证、错误处理等正常工作
2. **配置生产环境**：使用环境变量管理敏感信息
3. **添加更多服务**：配置 EmailJS 作为主要服务
4. **自定义样式**：根据需要调整表单样式

## 💡 提示

- Web3Forms 每月免费 1000 次提交，足够大多数网站使用
- 建议配置多个服务作为备选，提高可靠性
- 生产环境建议使用 EmailJS，功能更强大
- 定期检查邮件服务的使用量和状态

---

**🎉 恭喜！你的联系表单现在可以发送邮件了！**
