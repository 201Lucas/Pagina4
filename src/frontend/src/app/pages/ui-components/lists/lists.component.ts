import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  typesOfServices: string[] = [
    'Diseño Web Personalizado',
    'Optimización SEO',
    'Desarrollo de E-commerce',
    'Mantenimiento y Soporte',
    'Integración con Redes Sociales',
    'Consultoría en Marketing Digital'
  ];

  typesOfProducts: string[] = [
    'Software de Gestión Empresarial',
    'Plataforma de E-learning',
    'Aplicaciones Móviles Personalizadas',
    'Soluciones de E-commerce',
    'Herramientas de Analítica Web'
  ];


  folders: Section[] = [
    {
      name: 'Diseños Gráficos',
      updated: new Date('1/1/20'),
    },
    {
      name: 'Planes de Marketing',
      updated: new Date('2/15/21'),
    },
    {
      name: 'Proyectos de Desarrollo',
      updated: new Date('3/30/22'),
    },
  ];
  
  notes: Section[] = [
    {
      name: 'Propuestas Comerciales',
      updated: new Date('4/25/23'),
    },
    {
      name: 'Informes de Avance',
      updated: new Date('5/10/24'),
    },
  ];
}