// 专业的邮件模板文件
// 包含各种邮件模板的HTML和样式

import { COMPANY_INFO } from './emailConfig.js'

/**
 * 基础邮件样式
 */
export const EMAIL_STYLES = `
  <style>
    body { 
      font-family: 'Microsoft YaHei', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      margin: 0; 
      padding: 0; 
      background-color: #f5f5f5; 
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background-color: #ffffff; 
      box-shadow: 0 0 20px rgba(0,0,0,0.1); 
      border-radius: 10px;
      overflow: hidden;
    }
    .header { 
      background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%); 
      color: white; 
      padding: 30px; 
      text-align: center; 
    }
    .header h1 { 
      margin: 0; 
      font-size: 24px; 
      font-weight: 600; 
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    .header p { 
      margin: 10px 0 0 0; 
      opacity: 0.9; 
      font-size: 14px; 
    }
    .content { 
      padding: 30px; 
    }
    .info-section { 
      margin-bottom: 25px; 
    }
    .info-title { 
      color: #00bc97; 
      font-size: 18px; 
      font-weight: 600; 
      margin-bottom: 15px; 
      border-bottom: 2px solid #00bc97; 
      padding-bottom: 5px; 
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .info-item { 
      margin-bottom: 12px; 
      display: flex; 
      align-items: flex-start; 
    }
    .info-label { 
      font-weight: 600; 
      color: #4e3fa5; 
      min-width: 80px; 
      margin-right: 10px; 
    }
    .info-value { 
      flex: 1; 
      word-break: break-word; 
    }
    .message-box { 
      background-color: #f8f9fa; 
      border-left: 4px solid #00bc97; 
      padding: 20px; 
      margin: 20px 0; 
      border-radius: 0 8px 8px 0; 
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .footer { 
      background-color: #f8f9fa; 
      padding: 20px; 
      text-align: center; 
      border-top: 1px solid #e9ecef; 
    }
    .footer p { 
      margin: 5px 0; 
      font-size: 12px; 
      color: #666; 
    }
    .company-info { 
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); 
      padding: 20px; 
      margin-top: 20px; 
      border-radius: 8px; 
      border: 1px solid #dee2e6;
    }
    .urgent-tag { 
      background-color: #dc3545; 
      color: white; 
      padding: 4px 8px; 
      border-radius: 4px; 
      font-size: 12px; 
      font-weight: 600; 
    }
    .priority-high { 
      border-left-color: #dc3545; 
    }
    .cta-button { 
      display: inline-block; 
      background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%); 
      color: white; 
      padding: 12px 24px; 
      text-decoration: none; 
      border-radius: 25px; 
      font-weight: 600; 
      margin: 10px 0; 
      box-shadow: 0 4px 8px rgba(0,188,151,0.3);
      transition: all 0.3s ease;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,188,151,0.4);
    }
    .highlight-box { 
      background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%); 
      border-left: 4px solid #00bc97; 
      padding: 20px; 
      margin: 20px 0; 
      border-radius: 0 8px 8px 0; 
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .contact-info { 
      background-color: #f8f9fa; 
      padding: 20px; 
      border-radius: 8px; 
      margin: 20px 0; 
      border: 1px solid #dee2e6;
    }
    .logo { 
      max-width: 150px; 
      height: auto; 
      margin-bottom: 10px; 
    }
    .social-links {
      margin-top: 15px;
    }
    .social-links a {
      display: inline-block;
      margin: 0 5px;
      color: #00bc97;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .container { 
        margin: 0 10px; 
      }
      .content { 
        padding: 20px; 
      }
      .header { 
        padding: 20px; 
      }
      .info-item { 
        flex-direction: column; 
      }
      .info-label { 
        min-width: auto; 
        margin-bottom: 5px; 
      }
    }
  </style>
`

/**
 * 生成客户咨询邮件模板
 * @param {Object} formData - 表单数据
 * @returns {string} - HTML邮件内容
 */
export const generateInquiryEmailTemplate = (formData) => {
    const currentDate = new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Shanghai'
    })

    return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新客户咨询 - ${COMPANY_INFO.name}</title>
    ${EMAIL_STYLES}
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧬 新客户咨询通知</h1>
            <p>${COMPANY_INFO.name} | ${COMPANY_INFO.englishName}</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <div class="info-title">
                    📋 客户信息
                </div>
                <div class="info-item">
                    <span class="info-label">姓名:</span>
                    <span class="info-value">${formData.firstName} ${formData.lastName}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">邮箱:</span>
                    <span class="info-value">
                        <a href="mailto:${formData.email}" style="color: #00bc97; text-decoration: none;">
                            ${formData.email}
                        </a>
                    </span>
                </div>
                <div class="info-item">
                    <span class="info-label">公司:</span>
                    <span class="info-value">${formData.company}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">提交时间:</span>
                    <span class="info-value">${currentDate}</span>
                </div>
            </div>

            <div class="info-section">
                <div class="info-title">
                    💬 客户留言
                </div>
                <div class="message-box">
                    ${formData.message.replace(/\n/g, '<br>')}
                </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${formData.email}" class="cta-button">
                    立即回复客户
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>${COMPANY_INFO.name}</strong></p>
            <p>${COMPANY_INFO.englishName}</p>
            <p>专业的DNA测序解决方案提供商</p>
            <div class="social-links">
                <a href="mailto:${COMPANY_INFO.email}">📧 邮箱</a>
                <a href="tel:${COMPANY_INFO.phone}">📞 电话</a>
            </div>
            <p style="margin-top: 15px; color: #999;">此邮件由网站联系表单自动生成 | ${currentDate}</p>
        </div>
    </div>
</body>
</html>`
}

/**
 * 生成客户自动回复邮件模板
 * @param {Object} formData - 表单数据
 * @returns {string} - HTML邮件内容
 */
export const generateAutoReplyTemplate = (formData) => {
    const currentDate = new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Shanghai'
    })

    return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>感谢您的咨询 - ${COMPANY_INFO.name}</title>
    ${EMAIL_STYLES}
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🙏 感谢您的咨询</h1>
            <p>${COMPANY_INFO.name} | ${COMPANY_INFO.englishName}</p>
        </div>
        
        <div class="content">
            <div style="font-size: 18px; color: #00bc97; margin-bottom: 20px;">
                尊敬的 ${formData.firstName} ${formData.lastName}，您好！
            </div>
            
            <div style="margin-bottom: 25px; line-height: 1.8;">
                <p>感谢您对<strong>${COMPANY_INFO.name}</strong>的关注和信任！</p>
                <p>我们已经收到您的咨询信息，我们的专业团队将在<strong style="color: #dc3545;">24小时内</strong>与您取得联系，为您提供最专业的DNA测序解决方案。</p>
            </div>

            <div class="highlight-box">
                <h3 style="color: #00bc97; margin-top: 0;">📋 您的咨询信息</h3>
                <p><strong>公司/机构:</strong> ${formData.company}</p>
                <p><strong>联系邮箱:</strong> ${formData.email}</p>
                <p><strong>提交时间:</strong> ${currentDate}</p>
                <p><strong>咨询内容:</strong> ${formData.message.substring(0, 100)}${formData.message.length > 100 ? '...' : ''}</p>
            </div>

            <div class="contact-info">
                <h3 style="color: #4e3fa5; margin-top: 0;">📞 联系我们</h3>
                <p><strong>客服热线:</strong> ${COMPANY_INFO.phone}</p>
                <p><strong>邮箱:</strong> ${COMPANY_INFO.email}</p>
                <p><strong>地址:</strong> ${COMPANY_INFO.address}</p>
                <p><strong>网站:</strong> ${COMPANY_INFO.website}</p>
            </div>



            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${COMPANY_INFO.email}" class="cta-button">
                    立即联系我们
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>${COMPANY_INFO.name}</strong></p>
            <p>${COMPANY_INFO.englishName}</p>
            <p>专业的DNA测序解决方案提供商 | 科研路上，我们与您同行</p>
            <div class="social-links">
                <a href="mailto:${COMPANY_INFO.email}">📧 邮箱</a>
                <a href="tel:${COMPANY_INFO.phone}">📞 电话</a>
            </div>
            <p style="margin-top: 15px; color: #999;">此邮件为系统自动发送，请勿直接回复 | ${currentDate}</p>
        </div>
    </div>
</body>
</html>`
}
