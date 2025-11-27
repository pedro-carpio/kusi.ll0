import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/error/notfound/notfound.component';
import { MeComponent } from './components/careers/me/me.component';
import { KusilloComponent } from './components/careers/kusillo/kusillo.component';
import { UiUxDesignComponent } from './components/careers/ui-ux-design/ui-ux-design.component';
import { SoftwareDeveloperComponent } from './components/careers/software-developer/software-developer.component';
import { DataAnalystComponent } from './components/careers/data-analyst/data-analyst.component';
import { SolutionsArchitectComponent } from './components/careers/solutions-architect/solutions-architect.component';
import { ImpactGeneralistComponent } from './components/careers/impact-generalist/impact-generalist.component';
import { CxPractitionerComponent } from './components/careers/cx-practitioner/cx-practitioner.component';
import { CreationsComponent } from './components/creations/creations.component';
import { DataComponent } from './components/data/data.component';
import { CareersComponent } from './components/careers/careers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'mis',
    children: [
      { path: 'webadas', component: BlogComponent },
      { path: 'trabajos', component: PortfolioComponent },
      { path: 'estudios', component: StudiesComponent },
      { path: 'creaciones', component: CreationsComponent },
      { path: 'datos', component: DataComponent },
    ],
  },
  {
    path: 'yo-como',
    children: [
      { path: 'persona', component: MeComponent },
      { path: 'kusillo', component: KusilloComponent },
      { path: 'ui-ux-tech', component: UiUxDesignComponent },
      { path: 'software-developer', component: SoftwareDeveloperComponent },
      { path: 'data-analyst', component: DataAnalystComponent },
      { path: 'solutions-architect', component: SolutionsArchitectComponent },
      { path: 'impact-generalist', component: ImpactGeneralistComponent },
      { path: 'cx-practitioner', component: CxPractitionerComponent },
      { path: '', redirectTo: 'profesional', pathMatch: 'full' },
      { path: 'profesional', component: CareersComponent },
    ],
  },
  { path: 'error', component: ErrorComponent },
  // wildcard -> show 404 error page
  { path: '**', component: NotfoundComponent },
];
