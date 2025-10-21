// Google Tag Manager 事件追踪辅助函数
// 使用方法：import { gtmEvent } from '@/lib/gtm'

type GTMEvent = {
  event: string;
  [key: string]: any;
};

/**
 * 发送自定义事件到 Google Tag Manager
 * @param event 事件对象
 * @example
 * gtmEvent({
 *   event: 'conversion',
 *   conversion_type: 'letters_to_numbers',
 *   conversion_mode: 'standard'
 * })
 */
export const gtmEvent = (event: GTMEvent) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(event);
  }
};

/**
 * 追踪转换事件
 * @param mode 转换模式
 * @param type 转换类型
 */
export const trackConversion = (
  mode: 'standard' | 'ascii' | 'phone',
  type: 'letters_to_numbers' | 'numbers_to_letters'
) => {
  gtmEvent({
    event: 'conversion',
    conversion_mode: mode,
    conversion_type: type,
  });
};

/**
 * 追踪文件上传事件
 */
export const trackFileUpload = () => {
  gtmEvent({
    event: 'file_upload',
  });
};

/**
 * 追踪页面访问
 * @param pagePath 页面路径
 */
export const trackPageView = (pagePath: string) => {
  gtmEvent({
    event: 'page_view',
    page_path: pagePath,
  });
};

/**
 * 追踪复制事件
 * @param mode 转换模式
 */
export const trackCopy = (mode: string) => {
  gtmEvent({
    event: 'copy_result',
    conversion_mode: mode,
  });
};
