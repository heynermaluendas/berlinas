import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pages from './en-US/pages';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';

export default {
  'navBar.lang': 'Lenguajes',
  'layout.user.link.help': 'Ayuda',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Descargue esta página a su proyecto local',
  'app.welcome.link.fetch-blocks': 'Obtener todo el bloque',
  'app.welcome.link.block-list': 'Cree rápidamente páginas estándar basadas en el desarrollo de "bloques"',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
