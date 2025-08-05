import emailjs from '@emailjs/browser'
import { EMAIL_SERVICES, EMAIL_TEMPLATES } from './emailConfig.js'

/**
 * 使用 EmailJS 发送邮件
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmailWithEmailJS = async (formData) => {
  if (!EMAIL_SERVICES.EMAILJS.enabled) {
    throw new Error('EmailJS service is not enabled')
  }

  const templateParams = EMAIL_TEMPLATES.emailjsParams(formData)

  try {
    const response = await emailjs.send(
      EMAIL_SERVICES.EMAILJS.serviceId,
      EMAIL_SERVICES.EMAILJS.templateId,
      templateParams,
      EMAIL_SERVICES.EMAILJS.publicKey
    )
    
    console.log('EmailJS success:', response)
    return { success: true, service: 'EmailJS', response }
  } catch (error) {
    console.error('EmailJS error:', error)
    throw new Error(`EmailJS failed: ${error.message}`)
  }
}

/**
 * 使用 Formspree 发送邮件
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmailWithFormspree = async (formData) => {
  if (!EMAIL_SERVICES.FORMSPREE.enabled) {
    throw new Error('Formspree service is not enabled')
  }

  const formDataToSend = new FormData()
  const params = EMAIL_TEMPLATES.genericParams(formData)
  
  Object.keys(params).forEach(key => {
    formDataToSend.append(key, params[key])
  })
  
  try {
    const response = await fetch(EMAIL_SERVICES.FORMSPREE.endpoint, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const result = await response.json()
      console.log('Formspree success:', result)
      return { success: true, service: 'Formspree', response: result }
    } else {
      const errorData = await response.json()
      throw new Error(`Formspree error: ${errorData.error || 'Unknown error'}`)
    }
  } catch (error) {
    console.error('Formspree error:', error)
    throw new Error(`Formspree failed: ${error.message}`)
  }
}

/**
 * 使用 Web3Forms 发送邮件
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmailWithWeb3Forms = async (formData) => {
  if (!EMAIL_SERVICES.WEB3FORMS.enabled) {
    throw new Error('Web3Forms service is not enabled')
  }

  const payload = {
    access_key: EMAIL_SERVICES.WEB3FORMS.accessKey,
    ...EMAIL_TEMPLATES.genericParams(formData)
  }
  
  try {
    const response = await fetch(EMAIL_SERVICES.WEB3FORMS.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    
    const result = await response.json()
    
    if (result.success) {
      console.log('Web3Forms success:', result)
      return { success: true, service: 'Web3Forms', response: result }
    } else {
      throw new Error(`Web3Forms error: ${result.message || 'Unknown error'}`)
    }
  } catch (error) {
    console.error('Web3Forms error:', error)
    throw new Error(`Web3Forms failed: ${error.message}`)
  }
}

/**
 * 使用 Netlify Forms 发送邮件 (仅在 Netlify 部署时可用)
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmailWithNetlify = async (formData) => {
  if (!EMAIL_SERVICES.NETLIFY.enabled) {
    throw new Error('Netlify Forms service is not enabled')
  }

  const formDataToSend = new FormData()
  formDataToSend.append('form-name', 'contact')
  
  const params = EMAIL_TEMPLATES.genericParams(formData)
  Object.keys(params).forEach(key => {
    formDataToSend.append(key, params[key])
  })
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSend).toString()
    })
    
    if (response.ok) {
      console.log('Netlify Forms success')
      return { success: true, service: 'Netlify Forms' }
    } else {
      throw new Error(`Netlify Forms error: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Netlify Forms error:', error)
    throw new Error(`Netlify Forms failed: ${error.message}`)
  }
}

/**
 * 尝试发送邮件，按优先级使用不同的服务
 * @param {Object} formData - 表单数据
 * @returns {Promise<Object>} - 发送结果
 */
export const sendEmail = async (formData) => {
  const services = [
    { name: 'EmailJS', fn: sendEmailWithEmailJS },
    { name: 'Formspree', fn: sendEmailWithFormspree },
    { name: 'Web3Forms', fn: sendEmailWithWeb3Forms },
    { name: 'Netlify', fn: sendEmailWithNetlify }
  ]

  let lastError = null
  
  for (const service of services) {
    try {
      const result = await service.fn(formData)
      return result
    } catch (error) {
      console.warn(`${service.name} failed:`, error.message)
      lastError = error
      continue
    }
  }
  
  throw lastError || new Error('All email services failed')
}

/**
 * 验证表单数据
 * @param {Object} formData - 表单数据
 * @returns {Array} - 验证错误数组
 */
export const validateFormData = (formData) => {
  const errors = []
  
  if (!formData.firstName?.trim()) {
    errors.push('First Name is required')
  }
  
  if (!formData.lastName?.trim()) {
    errors.push('Last Name is required')
  }
  
  if (!formData.email?.trim()) {
    errors.push('Email is required')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address')
    }
  }
  
  if (!formData.company?.trim()) {
    errors.push('Company/Institution is required')
  }
  
  if (!formData.message?.trim()) {
    errors.push('Message is required')
  }
  
  return errors
}
