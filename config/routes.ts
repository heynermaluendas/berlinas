/**
* Configuración de enrutamiento de @name umi
 * @description solo admite configuración de ruta, componente, rutas, redirección, envoltorios, nombre e ícono
 * La ruta de acceso @param solo admite dos configuraciones de marcador de posición, la primera tiene el formato de parámetro dinámico: id y la segunda es un comodín *, que solo puede aparecer al final de la cadena de enrutamiento.
 * El componente @param configura la ruta del componente React utilizada para renderizar después de la coincidencia de ubicación y ruta. Puede ser una ruta absoluta o una ruta relativa. Si es una ruta relativa, se buscará comenzando desde src/pages.
 * @param rutas Configure subrutas, generalmente utilizadas cuando necesita agregar componentes de diseño a múltiples rutas.
 * @param redirigir configurar salto de enrutamiento
 * @param wrappers configura el componente de empaquetado del componente de enrutamiento. A través del componente de empaquetado, se pueden combinar más funciones en el componente de enrutamiento actual. Por ejemplo, se puede utilizar para la verificación de permisos a nivel de enrutamiento.
 * @param name Configura el título de la ruta. Por defecto, se lee el valor de menu.xxxx en el archivo de internacionalización menu.ts. Si el nombre está configurado como inicio de sesión, se lee el valor de menu.login en menu.ts. como el título.
 * @param icon Configure el ícono de la ruta. Para conocer el valor, consulte https://ant.design/components/icon-cn. Preste atención a eliminar el sufijo de estilo y las mayúsculas. <StepBackwardOutlined />, el valor debe ser stepBackward o StepBackward, si desea configurar el icono como <UserOutlined />, el valor debe ser usuario o Usuario.
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
        path: '/user/*',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/form',
    icon: 'form',
    name: 'form',
    routes: [
      {
        path: '/form',
        redirect: '/form/basic-form',
      },
      {
        name: 'basic-form',
        icon: 'smile',
        path: '/form/basic-form',
        component: './form/basic-form',
      },
      {
        name: 'step-form',
        icon: 'smile',
        path: '/form/step-form',
        component: './form/step-form',
      },
      {
        name: 'advanced-form',
        icon: 'smile',
        path: '/form/advanced-form',
        component: './form/advanced-form',
      },
    ],
  },
  {
    path: '/list',
    icon: 'table',
    name: 'list',
    routes: [
      {
        path: '/list/search',
        name: 'search-list',
        component: './list/search',
        routes: [
          {
            path: '/list/search',
            redirect: '/list/search/articles',
          },
          {
            name: 'articles',
            icon: 'smile',
            path: '/list/search/articles',
            component: './list/search/articles',
          },
          {
            name: 'projects',
            icon: 'smile',
            path: '/list/search/projects',
            component: './list/search/projects',
          },
          {
            name: 'applications',
            icon: 'smile',
            path: '/list/search/applications',
            component: './list/search/applications',
          },
        ],
      },
      {
        path: '/list',
        redirect: '/list/table-list',
      },
      {
        name: 'table-list',
        icon: 'smile',
        path: '/list/table-list',
        component: './table-list',
      },
      {
        name: 'basic-list',
        icon: 'smile',
        path: '/list/basic-list',
        component: './list/basic-list',
      },
      {
        name: 'card-list',
        icon: 'smile',
        path: '/list/card-list',
        component: './list/card-list',
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/basic',
      },
      {
        name: 'basic',
        icon: 'smile',
        path: '/profile/basic',
        component: './profile/basic',
      },
      {
        name: 'advanced',
        icon: 'smile',
        path: '/profile/advanced',
        component: './profile/advanced',
      },
    ],
  },
  {
    name: 'result',
    icon: 'CheckCircleOutlined',
    path: '/result',
    routes: [
      {
        path: '/result',
        redirect: '/result/success',
      },
      {
        name: 'success',
        icon: 'smile',
        path: '/result/success',
        component: './result/success',
      },
      {
        name: 'fail',
        icon: 'smile',
        path: '/result/fail',
        component: './result/fail',
      },
    ],
  },
  {
    name: 'exception',
    icon: 'warning',
    path: '/exception',
    routes: [
      {
        path: '/exception',
        redirect: '/exception/403',
      },
      {
        name: '403',
        icon: 'smile',
        path: '/exception/403',
        component: './exception/403',
      },
      {
        name: '404',
        icon: 'smile',
        path: '/exception/404',
        component: './exception/404',
      },
      {
        name: '500',
        icon: 'smile',
        path: '/exception/500',
        component: './exception/500',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './account/center',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  {
    name: 'SISI-PESV',
    icon: 'form',
    path: '/sisi-pesv',
    routes: [
      {
        name: 'Form-siniestros',
        path: '/sisi-pesv/form-siniestros',
        // redirect: '/sisi-pesv/form-siniestros',
        component: './sisi-pesv/form-siniestros',
      },
      {
        name: 'Form-administartivo',
        path: '/sisi-pesv/form-administartivo',
        // redirect: '/sisi-pesv/form-siniestros',
        component: './sisi-pesv/form-siniestros',
      },
      {
        name: 'Form-funcionamiento',
        path: '/sisi-pesv/form-funcionamiento',
        // redirect: '/sisi-pesv/form-siniestros',
        component: './sisi-pesv/form-siniestros',
      },
      {
        name: 'Form-vehiculos',
        path: '/sisi-pesv/form-vehiculos',
        // redirect: '/sisi-pesv/form-siniestros',
        component: './sisi-pesv/form-siniestros',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    component: '404',
    path: '/*',
  },
];
