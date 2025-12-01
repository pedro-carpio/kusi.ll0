import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'mis',
    children: [
      {
        path: 'webadas',
        loadComponent: () =>
          import('./components/blog/blog.component').then((m) => m.BlogComponent),
      },
      {
        path: 'trabajos',
        loadComponent: () =>
          import('./components/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
      },
      {
        path: 'estudios',
        loadComponent: () =>
          import('./components/studies/studies.component').then((m) => m.StudiesComponent),
      },
      {
        path: 'creaciones',
        loadComponent: () =>
          import('./components/creations/creations.component').then((m) => m.CreationsComponent),
      },
      {
        path: 'datos',
        loadComponent: () =>
          import('./components/data/data.component').then((m) => m.DataComponent),
      },
    ],
  },
  {
    path: 'yo-como',
    children: [
      {
        path: 'persona',
        loadComponent: () =>
          import('./components/careers/me/me.component').then((m) => m.MeComponent),
      },
      {
        path: 'kusillo',
        loadComponent: () =>
          import('./components/careers/kusillo/kusillo.component').then((m) => m.KusilloComponent),
      },
      {
        path: 'ui-ux-tech',
        loadComponent: () =>
          import('./components/careers/ui-ux-design/ui-ux-design.component').then(
            (m) => m.UiUxDesignComponent
          ),
      },
      {
        path: 'software-developer',
        loadComponent: () =>
          import('./components/careers/software-developer/software-developer.component').then(
            (m) => m.SoftwareDeveloperComponent
          ),
      },
      {
        path: 'data-analyst',
        loadComponent: () =>
          import('./components/careers/data-analyst/data-analyst.component').then(
            (m) => m.DataAnalystComponent
          ),
      },
      {
        path: 'solutions-architect',
        loadComponent: () =>
          import('./components/careers/solutions-architect/solutions-architect.component').then(
            (m) => m.SolutionsArchitectComponent
          ),
      },
      {
        path: 'impact-generalist',
        loadComponent: () =>
          import('./components/careers/impact-generalist/impact-generalist.component').then(
            (m) => m.ImpactGeneralistComponent
          ),
      },
      {
        path: 'cx-practitioner',
        loadComponent: () =>
          import('./components/careers/cx-practitioner/cx-practitioner.component').then(
            (m) => m.CxPractitionerComponent
          ),
      },
      {
        path: 'product-owner',
        loadComponent: () =>
          import('./components/careers/product-owner/product-owner.component').then(
            (m) => m.ProductOwnerComponent
          ),
      },
      { path: '', redirectTo: 'profesional', pathMatch: 'full' },
      {
        path: 'profesional',
        loadComponent: () =>
          import('./components/careers/careers.component').then((m) => m.CareersComponent),
      },
    ],
  },
  {
    path: 'error',
    loadComponent: () => import('./components/error/error.component').then((m) => m.ErrorComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/error/notfound/notfound.component').then((m) => m.NotfoundComponent),
  },
];
