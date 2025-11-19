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
import { UiEngineerComponent } from './components/careers/ui-engineer/ui-engineer.component';
import { SoftwareDeveloperComponent } from './components/careers/software-developer/software-developer.component';
import { DataAnalystComponent } from './components/careers/data-analyst/data-analyst.component';
import { CreationsComponent } from './components/creations/creations.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'mis', children: [
      { path: 'webadas', component: BlogComponent },
      { path: 'trabajos', component: PortfolioComponent },
      { path: 'estudios', component: StudiesComponent },
      { path: 'creaciones', component: CreationsComponent}
    ]
  },
  {
    path: 'yo-como', children: [
      { path: 'persona', component: MeComponent },
      { path: 'kusillo', component: KusilloComponent },
      { path: 'ui-ux-designer', component: UiUxDesignComponent },
      { path: 'ui-engineer', component: UiEngineerComponent },
      { path: 'software-developer', component: SoftwareDeveloperComponent },
      { path: 'data-analyst', component: DataAnalystComponent }
    ]
  },
  { path: 'error', component: ErrorComponent },
  // wildcard -> show 404 error page
  { path: '**', component: NotfoundComponent }
];
