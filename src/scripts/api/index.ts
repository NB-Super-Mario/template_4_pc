import { apiData } from '@util/http';
import { transformUrl } from './transform';

const NEW_MENU_API = transformUrl('/resource/web/cms/getCategoryTree');

/**
 * 新闻模块
 */
export const newsMenu = (): Promise<any> | false => {
  return apiData({
    api: NEW_MENU_API,
  });
};
