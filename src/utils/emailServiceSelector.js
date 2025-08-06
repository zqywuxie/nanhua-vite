// Web3Forms 邮件服务选择器
// 专门用于Web3Forms邮件服务

import { EMAIL_SERVICES } from "./emailConfig.js";
import { sendEmailWithWeb3Forms } from "./emailService.js";

/**
 * Web3Forms 服务配置检查器
 */
export const checkWeb3FormsAvailability = () => {
  if (!EMAIL_SERVICES.WEB3FORMS.enabled) {
    return {
      name: "Web3Forms",
      enabled: false,
      configured: false,
      reason: "Web3Forms服务未启用",
    };
  }

  const isConfigured = EMAIL_SERVICES.WEB3FORMS.accessKey !== "your_access_key";

  return {
    name: "Web3Forms",
    enabled: true,
    configured: isConfigured,
    supportsHtml: false, // Web3Forms 不支持复杂HTML
    description: "简单可靠的表单处理服务",
    reason: isConfigured ? "配置正确" : "请配置Access Key",
  };
};

/**
 * 检查服务可用性（兼容旧版本）
 */
export const checkServiceAvailability = () => {
  const service = checkWeb3FormsAvailability();
  return service.enabled ? [service] : [];
};

/**
 * Web3Forms 邮件发送器
 */
export const sendEmailSmart = async (formData) => {
  const startTime = Date.now();
  console.log("🚀 开始Web3Forms邮件发送...");

  const serviceStatus = checkWeb3FormsAvailability();

  if (!serviceStatus.enabled) {
    throw new Error("Web3Forms服务未启用，请在emailConfig.js中启用");
  }

  if (!serviceStatus.configured) {
    throw new Error("Web3Forms配置不完整，请检查Access Key");
  }

  try {
    const result = await sendEmailWithWeb3Forms(formData);

    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log(`✅ Web3Forms邮件发送成功！耗时: ${duration}ms`);
    return {
      ...result,
      selectedService: "Web3Forms",
      duration,
      htmlSupported: false,
    };
  } catch (error) {
    console.error(`❌ Web3Forms发送失败:`, error.message);
    throw new Error(`Web3Forms发送失败: ${error.message}`);
  }
};

/**
 * 专用Web3Forms发送器（兼容旧版本）
 */
export const sendEmailWithWeb3FormsOnly = async (formData) => {
  return await sendEmailSmart(formData);
};

/**
 * 获取Web3Forms服务信息
 */
export const getWeb3FormsInfo = () => {
  return {
    service: "Web3Forms",
    reason: "简单可靠的表单处理服务，无需服务器配置",
    setup: "注册Web3Forms账户，获取Access Key",
    cost: "完全免费",
    bestFor: "所有项目，特别适合静态网站",
    features: [
      "完全免费使用",
      "无需服务器配置",
      "支持基础HTML格式",
      "防垃圾邮件保护",
      "简单易用",
    ],
  };
};

/**
 * 获取邮件服务推荐（兼容旧版本）
 */
export const getEmailServiceRecommendations = () => {
  return [getWeb3FormsInfo()];
};
