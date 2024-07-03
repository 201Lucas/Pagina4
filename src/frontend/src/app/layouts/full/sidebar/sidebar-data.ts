import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Panel',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Interfaz Usuario',
  },
  {
    displayName: 'Insignicias',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Servicios',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lista',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Herramientas',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Sesion',
  },
  {
    displayName: 'Iniciar Sesion',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Registrarse',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Clientes',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Pagina de Prueba',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
