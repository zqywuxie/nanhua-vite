// Web3Forms 邮件服务配置文件
// 简单、可靠的表单处理服务

import {
  generateInquiryEmailTemplate,
  generateAutoReplyTemplate,
} from "./emailTemplates.js";

export const EMAIL_SERVICES = {
  // Web3Forms 配置 (唯一使用的服务)
  WEB3FORMS: {
    accessKey: "b01b87ca-600c-4904-9ec1-ea06ee945db6", // 你的 Web3Forms Access Key
    endpoint: "https://api.web3forms.com/submit",
    enabled: false, // 已启用
  },
};

// 公司信息配置
export const COMPANY_INFO = {
  name: "南京艾瑞谱生物技术有限公司",
  englishName: "ARP Biotech Co., Ltd.",
  email: "573905257@qq.com",
  phone: "4008-281-191",
  address: "南京经济开发区恒泰路8号汇智科技园A9栋第4层",
  website: "www.arpbiotech.com",
  logo: "https://your-domain.com/logo.png", // 替换为实际的logo URL
};

// 接收邮件的地址
export const RECIPIENT_EMAIL = COMPANY_INFO.email;

// 邮件模板配置
export const EMAIL_TEMPLATES = {
  // 专业的邮件主题
  subject: (name, company) =>
    `🧬 新客户咨询 - ${name} (${company}) | ARP Biotech`,

  // 自动回复邮件主题
  autoReplySubject: (name) => `感谢您联系南京艾瑞谱生物技术有限公司 - ${name}`,

  // 生成邮件内容（Web3Forms 格式）
  generateEmailContent: (formData) => {
    const customerName = `${formData.firstName} ${formData.lastName}`;
    const currentTime = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
    });

    return {
      // 基本信息
      name: customerName,
      email: formData.email,
      company: formData.company || "未提供",
      phone: formData.phone || "未提供",
      message: formData.message,

      // 邮件主题
      subject: EMAIL_TEMPLATES.subject(
        customerName,
        formData.company || "个人"
      ),

      // 格式化的邮件内容
      formatted_message: `
客户咨询信息：

👤 客户信息：
• 姓名：${customerName}
• 邮箱：${formData.email}
• 公司：${formData.company || "未提供"}
• 电话：${formData.phone || "未提供"}
• 提交时间：${currentTime}

💬 咨询内容：
${formData.message}

---
此邮件由南京艾瑞谱生物技术有限公司网站自动生成
请及时回复客户咨询
      `.trim(),
    };
  },

  // 生成HTML内容（备用）
  generateHtmlContent: (formData) => {
    const customerName = `${formData.firstName} ${formData.lastName}`;
    const currentTime = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
    });

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>新客户咨询</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #f8f9fa; padding: 20px; border-bottom: 3px solid #007bff; }
          .content { padding: 20px; }
          .info-section { margin: 15px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #007bff; }
          .label { font-weight: bold; color: #007bff; }
          .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>🧬 新客户咨询通知</h2>
          <p><strong>提交时间:</strong> ${currentTime}</p>
        </div>
        
        <div class="content">
          <div class="info-section">
            <h3>👤 客户信息</h3>
            <p><span class="label">姓名:</span> ${customerName}</p>
            <p><span class="label">邮箱:</span> ${formData.email}</p>
            <p><span class="label">公司:</span> ${
              formData.company || "未提供"
            }</p>
            <p><span class="label">电话:</span> ${
              formData.phone || "未提供"
            }</p>
          </div>
          
          <div class="info-section">
            <h3>💬 咨询内容</h3>
            <p>${formData.message || "客户未提供具体消息"}</p>
          </div>
        </div>
        
        <div class="footer">
          <p>此邮件由南京艾瑞谱生物技术有限公司网站自动生成</p>
          <p>请及时回复客户咨询</p>
        </div>
      </body>
      </html>
    `;
  },

  // 生成自动回复内容
  generateAutoReplyContent: (formData) => {
    const customerName = `${formData.firstName} ${formData.lastName}`;
    const currentTime = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
    });

    return `
尊敬的 ${customerName}，

感谢您联系南京艾瑞谱生物技术有限公司！

我们已经收到您的咨询信息，我们的专业团队将在24小时内与您联系。

📞 联系方式：
• 电话：${COMPANY_INFO.phone}
• 邮箱：${COMPANY_INFO.email}
• 地址：${COMPANY_INFO.address}

如果您有任何紧急需求，请直接拨打我们的客服热线。

再次感谢您对ARP Biotech的关注！

此致敬礼，
南京艾瑞谱生物技术有限公司团队

---
此邮件为自动回复，请勿直接回复此邮件
回复时间：${currentTime}
    `.trim();
  },
};
