// Web3Forms 邮件服务
// 简单、可靠的表单处理服务

import {
  EMAIL_SERVICES,
  EMAIL_TEMPLATES,
  COMPANY_INFO,
  RECIPIENT_EMAIL,
} from "./emailConfig.js";

/**
 * 使用 Web3Forms 发送邮件
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmailWithWeb3Forms = async (formData) => {
  if (!EMAIL_SERVICES.WEB3FORMS.enabled) {
    throw new Error("Web3Forms service is not enabled");
  }

  const emailContent = EMAIL_TEMPLATES.generateEmailContent(formData);

  const payload = {
    access_key: EMAIL_SERVICES.WEB3FORMS.accessKey,
    name: emailContent.name,
    email: formData.email,
    company: emailContent.company,
    phone: emailContent.phone,
    subject: emailContent.subject,
    message: emailContent.formatted_message,
    from_name: emailContent.name,
    to_email: RECIPIENT_EMAIL,
    redirect: false, // 不重定向，返回JSON响应
    botcheck: false, // 禁用机器人检查
  };

  try {
    const response = await fetch(EMAIL_SERVICES.WEB3FORMS.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Web3Forms success:", result);
      return {
        success: true,
        service: "Web3Forms",
        response: result,
      };
    } else {
      throw new Error(`Web3Forms error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Web3Forms error:", error);
    throw new Error(`Web3Forms failed: ${error.message}`);
  }
};

/**
 * 主要的邮件发送函数
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmail = async (formData) => {
  console.log("📧 开始发送邮件...");

  // 验证表单数据
  const validationResult = validateFormData(formData);
  if (!validationResult.isValid) {
    throw new Error(`表单数据验证失败: ${validationResult.errors.join(", ")}`);
  }

  try {
    // 使用Web3Forms发送邮件
    const result = await sendEmailWithWeb3Forms(formData);

    console.log("✅ 邮件发送成功");
    return {
      ...result,
      customerInfo: formatCustomerInfo(formData),
      stats: generateEmailStats(result),
    };
  } catch (error) {
    console.error("❌ 邮件发送失败:", error);
    throw error;
  }
};

/**
 * 验证表单数据
 * @param {Object} formData - 表单数据
 * @returns {Object} - 验证结果
 */
export const validateFormData = (formData) => {
  const errors = [];

  // 检查必填字段
  if (!formData.firstName || formData.firstName.trim() === "") {
    errors.push("First name is required");
  }

  if (!formData.lastName || formData.lastName.trim() === "") {
    errors.push("Last name is required");
  }

  if (!formData.email || formData.email.trim() === "") {
    errors.push("Email is required");
  } else {
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
  }

  if (!formData.message || formData.message.trim() === "") {
    errors.push("Message is required");
  }

  // 检查字段长度
  if (formData.firstName && formData.firstName.length > 50) {
    errors.push("First name must be 50 characters or fewer");
  }

  if (formData.lastName && formData.lastName.length > 50) {
    errors.push("Last name must be 50 characters or fewer");
  }

  if (formData.email && formData.email.length > 100) {
    errors.push("Email must be 100 characters or fewer");
  }

  if (formData.company && formData.company.length > 100) {
    errors.push("Company name must be 100 characters or fewer");
  }

  if (formData.phone && formData.phone.length > 20) {
    errors.push("Phone number must be 20 characters or fewer");
  }

  if (formData.message && formData.message.length > 2000) {
    errors.push("Message must be 2,000 characters or fewer");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * 格式化客户信息
 * @param {Object} formData - 表单数据
 * @returns {Object} - 格式化的客户信息
 */
export const formatCustomerInfo = (formData) => {
  return {
    fullName: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    company: formData.company || "未提供",
    phone: formData.phone || "未提供",
    message: formData.message,
    submissionTime: new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
    }),
  };
};

/**
 * 生成邮件统计信息
 * @param {Object} result - 发送结果
 * @returns {Object} - 统计信息
 */
export const generateEmailStats = (result) => {
  return {
    service: result.service || "Web3Forms",
    timestamp: new Date().toISOString(),
    success: result.success || false,
    htmlSupported: false, // Web3Forms 不支持复杂HTML
  };
};

/**
 * 测试邮件格式
 * @param {Object} formData - 表单数据
 * @returns {Object} - 测试结果
 */
export const testEmailFormat = (formData) => {
  try {
    const emailContent = EMAIL_TEMPLATES.generateEmailContent(formData);

    return {
      success: true,
      messageLength: emailContent.formatted_message.length,
      hasRequiredFields: !!(
        emailContent.name &&
        emailContent.email &&
        emailContent.message
      ),
      service: "Web3Forms",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};
