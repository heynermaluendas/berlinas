import component from './zh-CN/component';
import globalHeader from './zh-CN/globalHeader';
import menu from './zh-CN/menu';
import pages from './zh-CN/pages';
import pwa from './zh-CN/pwa';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';

export default {
  'navBar.lang': 'Lenguajes',
  'layout.user.link.help': 'Ayuda',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Descargue esta página a su proyecto local',
  'app.welcome.link.fetch-blocks': 'Obtener todo el bloque',
  'app.welcome.link.block-list': 'Cree rápidamente páginas estándar basadas en el desarrollo de "bloques"',
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
